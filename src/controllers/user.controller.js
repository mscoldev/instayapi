const { response, request } = require("express");
const User = require('../models/users.model')


const getUser = async (req = request, res = response) => {

    try {
        res.status(200).json({
            msg: 'Lista de usuarios'
        })
    } catch (error) {
        return res.status(500).json({ msg: error.message })
    }

}

const createUser = async (req = request, res = response) => {

    try {
        const body = req.body;
        const user = new User(body);
        console.log(body);
        const userSaved = await user.save();

        res.status(201).json({
            msg: 'Usuario registrado exitosamente!',
            userSaved
        })
    } catch (error) {
        return res.status(500).json({ msg: error.message })
    }

}

module.exports = { getUser, createUser }