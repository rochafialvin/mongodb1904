const express = require("express");
const cors = require("cors");

const app = express();
const port = 2022;

const getUserRouter = require("./routes/users");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("Server is running");
});

app.use("/users", getUserRouter);

app.listen(port, (err) => {
  if (err) return console.log({ status: "ERROR", message: err.message });

  console.log(`API is running at ${2022}`);
});
