const dbPool = require("../database/database");

const getAllList = () => {
  const SQLQuery = "SELECT * FROM lists";

  return dbPool.execute(SQLQuery);
};

const createNewList = (body) => {
  const SQLQuery = `INSERT INTO lists (name_list) VALUES ("${body.name_list}")`;

  return dbPool.execute(SQLQuery);
};

module.exports = {
  getAllList,
  createNewList,
};
