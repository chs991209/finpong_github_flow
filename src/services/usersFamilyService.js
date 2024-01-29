const usersFamilyDao = require('../models/usersFamilyDao');
const error = require('../utils/error');

const getAuthenticUserId = async (familyId, userName) => {
  const familyUsers = await usersFamilyDao.getUsersByFamilyId(familyId);
  const userIds = await Promise.all(
    familyUsers.map((user) => {
      if (user['option'] === userName) {
        return user.id;
      }
      return null;
    }),
  );
  const userId = userIds.find((id) => id !== null);
  if (!userId) {
    // undefined 이면 가족이 용돈이 조회되고 삭제하려던 사이에 가족에서 탈퇴한 것 또는 이름을 바꾼 것입니다.
    error.throwErr(404, 'NOT_EXISTING_OR_INVALID_USER');
  }
  return userId;
};

module.exports = {
  getAuthenticUserId,
};
