const { Schema, model } = require('mongoose');
const { ObjectId } = Schema.Types;

const imageSchema = new Schema(
  {
    owner: {
      type: ObjectId,
      ref: 'Users',
      required: true,
    },
    type: {
      type: String,
      enum: ['profile', 'post'],
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

const image = model('Images', imageSchema);
module.exports = image;
