const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es requerido']
    },
    usuario: {
        type: String,
        unique: [true, 'El nombre de usuario ya se encuentra en uso']
    },
    contrasena: {
        type: String,
        required: [true, 'La contrasena es requerida']
    },
    email: {
        type: String,
        required: [true, 'El correo es requerido']
    },
}, {
    timestamps: true,
    versionKey: false
})

userSchema.statics.encryptPassword = async (password) => {
    const salt = await bcrypt.genSalt(10)
    return await bcrypt.hash(password, salt)
}

userSchema.statics.comparePassword = async (password, receivedPassword) => {
    return await bcrypt.compare(password, receivedPassword)
    // Return: False or True
}

module.exports = model('User', userSchema);

