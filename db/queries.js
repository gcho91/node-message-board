const pool = require("./pool");

async function getAllMessages() {
  const { rows } = await pool.query("SELECT * from messages");
  return rows;
}

async function getMessageById(messageId) {
  const result = await pool.query("SELECT * from messages WHERE id = $1", [
    messageId,
  ]);
  return result.rows[0];
}

async function postNewMessage(authorName, message) {
  await pool.query("INSERT INTO messages (message, author) VALUES ($1, $2)", [
    authorName,
    message,
  ]);
}
module.exports = {
  getAllMessages,
  getMessageById,
  postNewMessage,
};
