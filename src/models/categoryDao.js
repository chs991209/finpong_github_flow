const { appDataSource } = require('../utils/dataSource');

const getNameById = async (categoryId) => {
  return await appDataSource.query(
    `
    SELECT category 
    FROM categories 
    WHERE id = ?
    `,
    [categoryId],
  );
};

module.exports = {
  getNameById,
};
