const { Schema, models, model } = require('mongoose')

const articleSchema = new Schema({
    identifiant_produit: {
      type: Number,
      required: true
    },
    zone: {
      type: Number,
      required: true
    },
    etat_emballage: {
      type: String,
      required: true
    },
    responsable: {
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
        },
        altitude: {
            type: Number,
            required: true
          }
      },
      rotation: {
        alpha: {
          type: Number,
          required: true
        },
        beta: {
          type: Number,
          required: true
        },
        gamma: {
            type: Number,
            required: true
          }
      },
    collision: {
      type: Number,
      required: true
    }
  });

module.exports = models.Article || model('Article', articleSchema);
