const { response, request } = require("express");
const Order = require('../models/orders.model')


const getOrder = async (req = request, res = response) => {

    try {
        const orders = await Order.find()
        res.status(200).json({
            msg: 'Lista de Ordenes',
            orders
        })
    } catch (error) {
        return res.status(500).json({ msg: error.message })
    }

}

const getOrderById = async (req = request, res = response) => {
    const order = await Order.findById(req.params._id);
    if (order != null) {
        res.status(200).json({
            msg: 'orden por Id',
            order
        });
    } else {
        res.status(404).json({
            msg: 'order no encontrado, verifique el Id ingresado'
        })
    }
}

const createOrder = async (req = request, res = response) => {

    try {
        const body = req.body;
        const order = new Order(body);
        console.log(body);
        const orderSaved = await order.save();

        res.status(201).json({
            msg: 'Orden creada satisfactoriamente',
            orderSaved
        })
    } catch (error) {
        return res.status(500).json({ msg: error.message })
    }

}

const updateOrder = async (req = request, res = response) => {

    try {
        const paramsId = req.params._id;
        const body = req.body;
        const updatedOrder = await Order.findByIdAndUpdate(paramsId, body, { new: true })
        if (updatedOrder != null) {
            res.status(200).json({
                msg: 'Orden Actualizada segun Id',
                updatedOrder
            });
        } else {
            res.status(404).json({ msg: 'Orden no encontrada o no existe' })
        }
    } catch (error) {
        return res.status(500).json({ msg: error.message })
    }

}

const deleteOrder = async (req = request, res = response) => {

    try {
        res.status(200).json({
            msg: 'Actualizar Orden'
        })
    } catch (error) {
        return res.status(500).json({ msg: error.message })
    }

}

module.exports = { getOrder, getOrderById, createOrder, updateOrder, deleteOrder }