const dbPool = require("../database/database");

const getAllUsers = () => {
  const SQLQuery = "SELECT * FROM lists";

  return dbPool.execute(SQLQuery);
};

module.exports = { getAllUsers };
