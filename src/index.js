const express = require("express");

const { mongoConnect } = require("./config/dbConfig");
const { PORT } = require("./config/serverConfig");
const { appRouter } = require("./routes");

const setupAndStartServer = async () => {
  const app = express();
  const port = PORT || 4200;

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.use("/api", appRouter);

  await mongoConnect();

  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
};

setupAndStartServer();
