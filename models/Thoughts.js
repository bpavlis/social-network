const { Schema, model } = require('mongoose');

const thoughtsSchema = new Schema({
  thoughtText: {
    type: String,
    required: true,
    min: 1,
    max: 280
  },
  createdAt: {
    type: Date,
    default: Date.now,
    //NEED TO ADD THE DATE GETTER HERE
  },
  username: {
    type: String,
    required: true,
  },
  reactions: {
    //add reaction code here
  },
})

const Thoughts = model('Thoughts', thoughtsSchema)
module.exports = Thoughts;