const { response, request } = require("express");


const getBox = async (req = request, res = response) => {

    try {
        res.status(200).json({
            msg: 'Lista de envios'
        })
    } catch (error) {
        return res.status(500).json({ msg: error.message })
    }

}

module.exports = { getBox }