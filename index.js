const express = require("express");
const path = require("node:path");
const app = express();

const messages = [
  {
    id: 1,
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    id: 2,
    text: "Nice to meet you!",
    user: "Charles",
    added: new Date(),
  },
];

app.use(express.urlencoded({ extended: true }));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.get("/", (req, res) => {
  res.render("index", { title: "Mini Message Board", messages: messages });
});

app.get("/new", (req, res) => {
  res.render("form");
});
app.post("/new", (req, res) => {
  messages.push({
    text: req.body.message,
    user: req.body.authorName,
    added: new Date(),
    id: messages.length + 1,
  });
  res.redirect("/");
});

app.get("/messages/:id", (req, res) => {
  const messageId = req.params.id;
  const message = messages.find(
    (message) => message.id === parseInt(messageId)
  );

  if (!message) {
    return res.status(404).send("message not found!");
  }

  res.render("messageDetails", { message: message });
});
app.listen(3000, (req, res) => {
  console.log("listening on port 3000");
});
