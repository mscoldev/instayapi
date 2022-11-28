const { response, request } = require("express");
const jwt = require('jsonwebtoken');
const User = require('../models/users.model');



const getUser = async (req = request, res = response) => {

    try {
        const users = await User.find()
        res.status(200).json({
            msg: 'Lista de usuarios',
            users
        })
    } catch (error) {
        return res.status(500).json({ msg: error.message })
    }

}

const createUser = async (req = request, res = response) => {

    try {
        const { nombre, usuario, password, email } = req.body;
        const newUser = new User({
            nombre,
            usuario,
            password: await User.encryptPassword(password),
            email
        });

        const savedUser = await newUser.save();
        const username = savedUser.usuario;

        const token = jwt.sign({ id: savedUser._id }, 'millavesecreta', {
            expiresIn: 86400, //*24 Horas
        });


        res.status(201).json({
            msg: 'Usuario registrado exitosamente!',
            username,
            token
        })
    } catch (error) {
        return res.status(500).json({ msg: error.message })
    }

}

module.exports = { getUser, createUser }