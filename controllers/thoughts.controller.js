const { Thoughts, User } = require('../models');
const Model = Thoughts;

async function getAllItems() {
  try {
    return await Model.find();
  } catch (err) {
    throw new Error(err)
  }
}

async function getItemById(id) {
  try {
    return await Model.findById(id);
  } catch (err) {
    throw new Error(err)
  }
}

async function createItem(data) {
  try {
    return await Model.create(data);
  } catch (err) {
    throw new Error(err)
  }
}

async function updateItemById(id, data) {
  try {
    return await Model.findByIdAndUpdate(
      id,
      data,
      { new: true }
    )
  } catch (err) {
    throw new Error(err)
  }
}

async function deleteItemById(id) {
  try {
    return await Model.findByIdAndDelete(id);
  } catch (err) {
    throw new Error(err)
  }
}

async function addReaction(id, data) {
  try {
    return await Thoughts.findByIdAndUpdate(
      id,
      data,
      { new: true}
    )
  } catch (err) {
    throw new Error(err)
  }
}

async function removeReaction(id) {
  try {
    return await Thoughts.findByIdAndDelete()
  } catch (err) {
    throw new Error(err)
  }
}

module.exports = {
  getAllThoughts: getAllItems,
  getThoughtById: getItemById,
  createThought: createItem,
  updateThoughtById: updateItemById,
  deleteThoughtById: deleteItemById,
  addReaction,
  removeReaction
}
