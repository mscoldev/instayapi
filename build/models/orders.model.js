"use strict";

var _require = require('mongoose'),
  Schema = _require.Schema,
  model = _require.model;
var orderSchema = Schema({
  fecha: {
    type: Date,
    "default": Date.now
  },
  largo: {
    type: Schema.Types.Decimal128,
    required: [true, 'La medida de largo es obligatoria']
  },
  ancho: {
    type: Schema.Types.Decimal128,
    required: [true, 'La medida de ancho es obligatoria']
  },
  peso: {
    type: Schema.Types.Decimal128,
    required: [true, 'La medida de peso es obligatoria']
  },
  direccion: {
    type: String,
    required: [true, 'La direccion es necesaria']
  },
  ciudad: {
    type: String,
    required: [true, 'La ciudad es necesaria']
  },
  destinatario: {
    type: String,
    required: [true, 'El destinatario es necesario']
  },
  nitdestinatario: {
    type: String,
    required: [true, 'El Nit del destinatario es necesario']
  },
  direccionentrega: {
    type: String,
    required: [true, 'La direccion de entrega es necesaria']
  },
  ciudadentrega: {
    type: String,
    required: [true, 'La ciudad de entrega es necesaria']
  }
}, {
  timestamps: true,
  versionKey: false
});
module.exports = model('Order', orderSchema);