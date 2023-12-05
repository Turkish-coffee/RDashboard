const { Schema, models, model } = require('mongoose')

const formationSchema = new Schema({
    nom_formation: {
      type: String,
      required: true
    },
    sujet: {
      type: String,
      required: true
    },
    date_Formation: {
      type: Date,
      required: true
    },
    pourcentage_engagement: {
      type: Number,
      required: true
    },
    pourcentage_satisfaction: {
      type: Number,
      required: true
    },
    tag_formateur: {
      type: String,
      required: true
    },
    tag_personnel: {
      type: String,
      required: true
    }
  });

module.exports = models.Formation || model('Formation', formationSchema);
