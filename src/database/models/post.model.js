const { Schema, model } = require('mongoose');
const { ObjectId } = Schema.Types;

const postSchema = new Schema(
  {
    owner: {
      type: ObjectId,
      ref: 'Users',
      required: true,
    },
    image: {
      type: ObjectId,
      ref: 'Images',
      required: true,
    },
    title: {
      type: String,
      default: null,
    },
    cameraInfo: {
      type: String,
      default: null,
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

const post = model('Posts', postSchema);
module.exports = post;
