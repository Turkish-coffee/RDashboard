const mongoose = require('mongoose');
const { Schema, models, model } = require('mongoose')

const saleSchema = new Schema({
  identifiant: {
    type: Number,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  responsable: {
    type: String,
    required: true
  },
  marge_degagée: {
    type: Number,
    required: true
  },
  kilometres_parcourus: {
    type: Number,
    required: true
  },
  mot_cle_responsable: {
    type: String,
    required: true
  },
  mot_cle_client_fournisseur: {
    type: String,
    required: true
  }
});

module.exports = models.sale || model('sale', saleSchema);
