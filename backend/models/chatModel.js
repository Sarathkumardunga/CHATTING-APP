const mongoose = require("mongoose")

const chatModel = mongoose.Schema(
  {
    chatName: {
      type: String,
      trim: true
    },

    isGroupChat: {
      type: Boolean,
      default: false,
    },

    users: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],

    latestMessage: {
      type: mongoose.Schema.Types.ObjectId,
      //reference to the part where message is stored
      ref: "Message",
    },

    groupAdmin: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },

  {
    //Also create a timestamp for the data when it is added in mongoose
    timestamps: true,
  }
);

const Chat = mongoose.model("Chat", chatModel);

module.exports = Chat;



//chatName
//isGroupChat
//users
//latestMessage
//groupAdmin