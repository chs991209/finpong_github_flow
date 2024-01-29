const { appDataSource } = require('../utils/dataSource');
const error = require('../utils/error');

const getMoneyFlowsByUserId = async (userId) => {
  return await appDataSource.query(
    `
    SELECT id, user_id, flow_type_id, category_id, memo, amount, year, month, date
    FROM money_flows 
    WHERE user_id = ? 
    ORDER BY year desc, month desc, date desc, category_id, amount desc
    `,
    [userId],
  );
};

const getMoneyFlowsByUserIdByYear = async (userId, year) => {
  return await appDataSource.query(
    `
    SELECT id, user_id, flow_type_id, category_id, memo, amount, year, month, date
    FROM money_flows 
    WHERE user_id = ? 
    AND year = ?
    ORDER BY month desc, date desc, category_id, amount desc
    `,
    [userId, year],
  );
};

const getMoneyFlowsByUserIdByYearMonth = async (userId, year, month) => {
  return await appDataSource.query(
    `
    SELECT id, user_id, flow_type_id, category_id, memo, amount, year, month, date
    FROM money_flows 
    WHERE user_id = ? 
    AND year = ?
    AND month = ?
    ORDER BY date desc, category_id, amount desc
    `,
    [userId, year, month],
  );
};

const getMoneyFlowsByUserIdByYearDate = async (userId, year, date) => {
  return await appDataSource.query(
    `
    SELECT id, user_id, flow_type_id, category_id, memo, amount, year, month, date
    FROM money_flows 
    WHERE user_id = ? 
    AND year = ?
    AND date = ?
    ORDER BY month asc, category_id, amount desc
    `,
    [userId, year, date],
  );
};

const getMoneyFlowsByUserIdByYearMonthDate = async (userId, year, month, date) => {
  return await appDataSource.query(
    `
    SELECT id, user_id, flow_type_id, category_id, memo, amount, year, month, date
    FROM money_flows 
    WHERE user_id = ? 
    AND year = ?
    AND month = ?
    AND date = ?
    ORDER BY category_id, amount desc
    `,
    [userId, year, month, date],
  );
};

module.exports = {
  getMoneyFlowsByUserId,
  getMoneyFlowsByUserIdByYear,
  getMoneyFlowsByUserIdByYearMonth,
  getMoneyFlowsByUserIdByYearDate,
  getMoneyFlowsByUserIdByYearMonthDate,
};
