const db = require("./../../db/db");
//done
const newConversation = (req, res) => {
  const senderId = req.token.id;
  const receiverId = req.body.receiver_id;

  const data = [senderId, receiverId];
  const query = `INSERT INTO conversation (sender_id,reciver_id) VALUES (?,?)`;

  db.query(query, data, (err, result) => {
    if (err) return res.status(500).send("insert is not done");
    res.status(201).json(result);
  });
};

const newMessages = (req, res) => {
  const user_id = req.body.id;
  const receiverId = req.body.receiver_id;
  const message = req.body.message;

  const query = `SELECT * FROM conversation WHERE sender_id =? AND reciver_id=? `;
  const data = [user_id, receiverId];
  db.query(query, data, (err, result) => {
    console.log("ressult",result);
    if (err) return res.status(400).send("SELECT is not done");
    const conversation_id = result[0].id;
    const query = `INSERT INTO messages (text,sender_id,conversation_id) VALUES (?,?,?) `;
    const data = [message, user_id, conversation_id];

    db.query(query, data, (err, result1) => {
      if (err) return res.status(500).send("INSERT is not done");
      res.status(200).json(result1);
    });
  });
};

const getConversation = (req, res) => {
  const user_id = req.body.sender;
  const receiverId = req.body.receiver;
  console.log(user_id);
  console.log(receiverId);
  const query = `SELECT * FROM conversation INNER JOIN messages ON conversation.id= messages.conversation_id  
  WHERE conversation.sender_id =? AND conversation.reciver_id=? `;

  const data = [user_id, receiverId];
  db.query(query, data, (err, result) => {
    console.log("result from baaaack",result);
    if (err) return res.status(400).send("SELECT is not done");
    res.status(200).json(result);
  });
};

module.exports = {
  newConversation,
  getConversation,
  newMessages,
};
