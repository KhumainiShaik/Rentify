const { getDB } = require('../config/db');

const collection = () => getDB().collection('properties');

const createProperty = async (property) => {
  const result = await collection().insertOne(property);
  return result.ops[0];
};

const getProperties = async () => {
  return await collection().find().toArray();
};

const updateProperty = async (id, updates) => {
  await collection().updateOne({ _id: new require('mongodb').ObjectID(id) }, { $set: updates });
  return await collection().findOne({ _id: new require('mongodb').ObjectID(id) });
};

const deleteProperty = async (id) => {
  await collection().deleteOne({ _id: new require('mongodb').ObjectID(id) });
};

const likeProperty = async (id) => {
  await collection().updateOne({ _id: new require('mongodb').ObjectID(id) }, { $inc: { likes: 1 } });
  return await collection().findOne({ _id: new require('mongodb').ObjectID(id) });
};

module.exports = { createProperty, getProperties, updateProperty, deleteProperty, likeProperty };
