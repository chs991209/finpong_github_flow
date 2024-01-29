const flowTypeDao = require('../models/flowTypeDao');
const error = require('../utils/error');

const getFlowStatusById = async (flowTypeId) => {
  const result = await flowTypeDao.getFlowStatusById(flowTypeId);
  return result[0].status;
};

module.exports = {
  getFlowStatusById,
};
