const { getDB } = require('../config/db');

const collection = () => getDB().collection('users');

const createUser = async (user) => {
  const result = await collection().insertOne(user);
  return result.ops[0];
};

const findUserByEmail = async (email) => {
  return await collection().findOne({ email });
};

const findUserById = async (id) => {
  return await collection().findOne({ _id: new require('mongodb').ObjectID(id) });
};

module.exports = { createUser, findUserByEmail, findUserById };
