const mongoose = require("mongoose");

const mongoConnect = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/TodoJS", {
      dbName: "TodoJS",
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB", error);
  }
};

module.exports = { mongoConnect };
