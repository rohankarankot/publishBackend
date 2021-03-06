const connectToMongo = require("./db");
const express = require("express");
var cors = require("cors");

const port = process.env.PORT || 5000;
connectToMongo();

const app = express();
app.use(cors());
app.use(express.json());
// Available Routes
app.get("/", (req, res) => {
  res.json({ success: "home" });
});
app.use("/api/auth", require("./routes/auth"));
app.use("/api/passwords", require("./routes/password"));

app.listen(port, () => {
  console.log(` app listening at http://localhost:${port}`);
});
