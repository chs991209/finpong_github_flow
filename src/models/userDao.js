const { appDataSource } = require('../utils/dataSource');
const error = require('../utils/error');

const getUserByEmail = async (email) => {
  return await appDataSource.query(
    `
    SELECT * 
    FROM users 
    WHERE email = ?
    `,
    [email],
  );
};

const getUserInformationById = async (userId) => {
  const [result] = await appDataSource.query(
    `
    SELECT id AS userId
    FROM users
    WHERE id = ?
  `,
    [userId],
  );
  const [result1] = await appDataSource.query(
    `
    SELECT u.id AS userId, uf.family_id AS familyId, role_id AS roleId
    FROM users u
    JOIN users_families uf 
    ON u.id = uf.user_id
    WHERE u.id = ?
  `,
    [userId],
  );
  if (!result1) {
    return result;
  } else {
    return result1;
  }
};

const getNameById = async (userId) => {
  return await appDataSource.query(
    `
    SELECT name
    FROM users 
    WHERE id = ?
    `,
    [userId],
  );
};

const getUserUpdatedAt = async (userId) => {
  return await appDataSource.query(
    `
    SELECT updated_at
    FROM users
    WHERE user_id = ?
    `,
    [userId],
  );
};

module.exports = {
  getUserByEmail,
  getUserInformationById,
  getNameById,
  getUserUpdatedAt,
};
