const moneyFlowDao = require('../models/moneyFlowDao');
const {
  MoneyFlowHandler,
  ConcatenatedMoneyFlowsHandler,
} = require('../utils/arrayUtil');

const getMoneyFlowsByUserId = async (userId) => {
  // userId를 가진 사용자의 수입/지출 내역을 전부 조회합니다.
  return await MoneyFlowHandler.mapMoneyFlows(await moneyFlowDao.getMoneyFlowsByUserId(userId));
};

const getMoneyFlowsByUserIdByYear = async (userId, year) => {
  return await MoneyFlowHandler.mapMoneyFlows(
    await moneyFlowDao.getMoneyFlowsByUserIdByYear(userId, year),
  );
};

const getMoneyFlowsByUserIdByYearMonth = async (userId, year, month) => {
  return await MoneyFlowHandler.mapMoneyFlows(
    await moneyFlowDao.getMoneyFlowsByUserIdByYearMonth(userId, year, month),
  );
};

const getMoneyFlowsByUserIdByYearDate = async (userId, year, date) => {
  return await MoneyFlowHandler.mapMoneyFlows(
    await moneyFlowDao.getMoneyFlowsByUserIdByYearDate(userId, year, date),
  );
};

const getMoneyFlowsByUserIdByYearMonthDate = async (userId, year, month, date) => {
  return await MoneyFlowHandler.mapMoneyFlows(
    await moneyFlowDao.getMoneyFlowsByUserIdByYearMonthDate(userId, year, month, date),
  );
};

const getMoneyFlowsByFamilyUserIds = async (familyUserIds) => {
  // 가족에 포함된 사용자들의 수입/지출 내역을 조회합니다.
  return await ConcatenatedMoneyFlowsHandler.concatMoneyFlowsArrays(
    familyUserIds,
    moneyFlowDao.getMoneyFlowsByUserId,
    familyUserIds,
  );
};

const getMoneyFlowsByFamilyUserIdByYear = async (familyUserIds, year) => {
  return await ConcatenatedMoneyFlowsHandler.concatMoneyFlowsArrays(
    familyUserIds,
    moneyFlowDao.getMoneyFlowsByUserIdByYear,
    year,
  );
};

const getMoneyFlowsByFamilyUserIdByYearMonth = async (familyUserIds, year, month) => {
  return await ConcatenatedMoneyFlowsHandler.concatMoneyFlowsArrays(
    familyUserIds,
    moneyFlowDao.getMoneyFlowsByUserIdByYearMonth,
    year,
    month,
  );
};

const getMoneyFlowsByFamilyUserIdByYearDate = async (familyUserIds, year, date) => {
  return await ConcatenatedMoneyFlowsHandler.concatMoneyFlowsArrays(
    await moneyFlowDao.getMoneyFlowsByUserIdByYearDate,
    year,
    date,
  );
};

const getMoneyFlowsByFamilyUserIdsByYearMonthDate = async (familyUserIds, year, month, date) => {
  return await ConcatenatedMoneyFlowsHandler.concatMoneyFlowsArrays(
    familyUserIds,
    moneyFlowDao.getMoneyFlowsByUserIdByYearMonthDate,
    year,
    month,
    date,
  );
};

module.exports = {
  getMoneyFlowsByUserId,
  getMoneyFlowsByUserIdByYear,
  getMoneyFlowsByUserIdByYearMonth,
  getMoneyFlowsByUserIdByYearDate,
  getMoneyFlowsByUserIdByYearMonthDate,
  getMoneyFlowsByFamilyUserIds,
  getMoneyFlowsByFamilyUserIdByYear,
  getMoneyFlowsByFamilyUserIdByYearMonth,
  getMoneyFlowsByFamilyUserIdByYearDate,
  getMoneyFlowsByFamilyUserIdsByYearMonthDate,
};
