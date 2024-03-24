const express = require("express");
const router = require("./route");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
app.use("/I", router);
app.use("*", (req, res) => {
  res.sendStatus(404);
});
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`app is listening to port ${PORT}`);
});
