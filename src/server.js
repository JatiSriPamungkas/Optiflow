const express = require("express");
require("dotenv").config();

const PORT = process.env.PORT || 4000;

const app = express();

const listsRoutes = require("./routes/lists");

app.use(express.json());

app.use("/lists", listsRoutes);

app.listen(PORT, () => {
  console.log(`Server is Listening on PORT ${PORT}`);
});
