const mongoose = require('mongoose');
const { Schema, models, model } = require('mongoose')


const employeeSchema = new Schema({
  identifiant: {
    type: String,
    required: true
  },
  nom_prenom: {
    type: String,
    required: true
  },
  etat: {
    type: String,
    required: true
  },
  service: {
    type: String,
    required: true
  },
  frequence_cardiaque: {
    type: Number,
    required: true
  },
  taux_sudation: {
    type: Number,
    required: true
  },
  position: {
    latitude: {
      type: Number,
      required: true
    },
    longitude: {
      type: Number,
      required: true
    }
  }
});

module.exports = models.Employee || model("Employee", employeeSchema);
