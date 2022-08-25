const { Schema, model } = require('mongoose');
const { ObjectId } = Schema.Types;

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    userName: {
      type: String,
      required: true,
      unique: true,
    },
    instagramUsername: {
      type: String,
      default: null,
    },
    websiteUrl: {
      type: String,
      default: null,
    },
    location: {
      type: String,
      default: null,
    },
    bio: {
      type: String,
      default: null,
    },
    profileImage: {
      type: ObjectId,
      ref: 'Images',
      default: null,
    },
    recoveryToken: {
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

userSchema.methods.toJSON = function () {
  const user = this.toObject();
  delete user.email;
  delete user.password;
  delete user.recoveryToken;
  delete user.isActive;
  delete user.createdAt;
  delete user.updatedAt;
  delete user.__v;
  return user;
};

const user = model('User', userSchema);

module.exports = user;
