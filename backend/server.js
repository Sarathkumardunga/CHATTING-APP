const express = require("express");
const dotenv = require("dotenv");
const { chats } = require("./data/data");

//0)create an instance
const app = express();

dotenv.config();

//2)Create own expressjs API
app.get("/", (req, res) => {
  res.send("API is Running successfully");
});

//create some complex api to serve data related to chats
app.get("/api/chat", (req, res) => {
  res.send(chats);
});

//To get the data from one of the user using id
app.get("/api/chat/:id", (req, res) => {
  //   console.log(req.params.id);
  //if the id in the chats data is equal to the params id then, send that response
  const singleChat = chats.find((c) => c._id === req.params.id);
  res.send(singleChat); //only the matched id object is stored in the single chat
});

//coz we dont want out port to be known to others
const PORT = process.env.PORT || 5000;
//1) listen on port, optional message
app.listen(5000, console.log(`Server started on port ${PORT}`));
