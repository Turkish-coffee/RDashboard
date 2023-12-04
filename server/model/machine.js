const { Schema, models, model } = require('mongoose')


const machineSchema = new Schema({
  reference_machine: {
    type: Number,
    required: true
  },
  zone: {
    type: Number,
    required: true
  },
  premiere_mise_en_service: {
    type: Date,
    required: true
  },
  cadence_de_production: {
    type: Number,
    required: true
  },
  etat: {
    type: String,
    required: true
  },
  prochain_entretien: {
    type: Date,
    required: true
  },
  utilisateur_actuel: {
    type: String,
    required: true
  }
});


module.exports = models.Machine || model('Machine', machineSchema);
