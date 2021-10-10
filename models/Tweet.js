const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
  tweet: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  time: {
    type: String,
    required: true
  }
});

const Tweet = mongoose.model("tweet", UserSchema);

module.exports = Tweet;

