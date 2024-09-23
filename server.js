const express = require("express");
const defaultRouter = require("./routes/router");
const app = express();

const port = 3000;

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use("/", defaultRouter);

app.listen(port, (req, res) => {
  console.log(`listening on port ${port} `);
});
