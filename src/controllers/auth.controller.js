const { response, request } = require("express");


const singIn = async (req = request, res = response) => {

    try {
        res.status(200).json({
            msg: 'singIng'
        })
    } catch (error) {
        return res.status(500).json({ msg: error.message })
    }

}

module.exports = { singIn }