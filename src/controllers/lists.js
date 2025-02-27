const ListModels = require("../models/lists");

// POST METHOD
const createNewList = async (req, res) => {
  const { body } = req;
  console.log(body);
  try {
    await ListModels.createNewList(body);

    res.json({
      message: "POST LIST SUCCESSFULL",
      data: body,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error,
    });
  }
};

// GET METHOD
const getAllList = async (req, res) => {
  try {
    const [data] = await ListModels.getAllUsers();

    res.json({
      message: "GET LIST SUCCESSFULL",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error,
    });
  }
};

// PATCH METHOD
const updateList = (req, res) => {
  const { idList } = req.params;
  console.log("ID LIST: ", idList);
  res.json({
    message: "UPDATE LIST SUCCESSFULL",
    data: req.body,
  });
};

// DELETE METHOD
const deleteList = (req, res) => {
  const { idUser } = req.params;
  res.json({
    message: "DELETE LIST SUCCESSFULL",
    data: {
      name: "Fatoni Aditya",
      email: "fatoniaditya@gmail.com",
      address: "Depok",
    },
  });
};

module.exports = {
  createNewList,
  getAllList,
  updateList,
  deleteList,
};

//awokawokawok
