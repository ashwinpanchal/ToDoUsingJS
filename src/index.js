const express = require("express");

const { mongoConnect } = require("./config/dbConfig");

const setupAndStartServer = async () => {
  const app = express();
  const port = 3000;

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  await mongoConnect();

  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
};

setupAndStartServer();
