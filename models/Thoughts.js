const { Schema, model } = require('mongoose');

const reactionSchema = new Schema({
  reactionId: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId()
  },
  createdAt: {
    type: Date,
    default: Date.now,
    //NEED TO ADD THE DATE GETTER HERE
  },
  reactionBody: {
    type: String,
    required: true,
    max: 280
  },
  username: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    //Use a getter method to format the timestamp on query here
  },
},
{
  toJSON: {
    getters: true,
  },
  id: false,
})



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
  reactions: [reactionSchema],
},
{
  toJSON: {
    virtuals: true,
  },
  id: false,
})

thoughtsSchema.virtual("reactionsCount").get(function() {
  return this.reactions.length
})

// // Getter method to format createdAt timestamp
// reactionSchema.path('createdAt').get(function(value) {
//   // Format the timestamp using toLocaleString()
//   return value.toLocaleString('en-US', { timeZone: 'UTC' }); // Adjust timeZone and options as needed
// });

const Thoughts = model('Thoughts', thoughtsSchema)
module.exports = Thoughts;