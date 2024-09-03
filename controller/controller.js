const db = require("../db/queries");

async function getMessages(req, res) {
  try {
    const messages = await db.getAllMessages();
    console.log("messages ", messages);

    res.render("index", { title: "Mini Message Board", messages: messages });
  } catch (err) {
    console.error("Error fetching messages: ", err);
    res.status(500).send("Server Error");
  }
}

async function findMessageById(req, res) {
  const messageId = req.params.id;

  try {
    const message = await db.getMessageById(messageId);
    if (!message) {
      return res.status(404).send("message not found!");
    }
    res.render("messageDetails", { message: message });
  } catch (err) {
    console.error("Error fetching message: ", err);
    res.status(500).send("Server Error");
  }
}

async function postNewMessage(req, res) {
  const { authorName, message } = req.body;
  console.log("message details in post ", authorName, message);
  try {
    await db.postNewMessage(authorName, message);
    res.redirect("/");
  } catch (err) {
    console.error("Error posting message ", err);
    res.status(500).send("Server Error");
  }
}
module.exports = {
  getMessages,
  findMessageById,
  postNewMessage,
};
