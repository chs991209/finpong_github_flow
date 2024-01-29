const userDao = require('../models/userDao');
const error = require('../utils/error');
const dotenv = require('dotenv');
dotenv.config();

const getNameById = async (userId) => {
  const result = await userDao.getNameById(userId);
  return result[0]['name'];
};

const getUserUpdatedAt = async (userId) => {
  const updatedAt = await userDao.getUserUpdatedAt(userId);
  return await updatedAt[0]['updated_at'];
};

module.exports = {
  getNameById,
  getUserUpdatedAt
};
