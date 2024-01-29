const categoryDao = require('../models/categoryDao');
const error = require('../utils/error');

const getNameById = async (categoryId) => {
  const result = await categoryDao.getNameById(categoryId);
  return result[0]['category'];
};

module.exports = {
  getNameById,
};
