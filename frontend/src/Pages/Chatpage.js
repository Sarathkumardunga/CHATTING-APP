import React, { useEffect, useState } from 'react';
import axios from "axios";

const Chatpage = () => {
    const [chats, setChats] = useState([]);
    const fetchChats = async () => {
        //in axios.get("PROVIDE THE API ENDPOINT")
        //{data} destructured the data coz i only want the data in whole object of chats
        const {data} = await axios.get("/api/chat");

        setChats(data);
    }

    //call the function in useEffect hook
    //UseEffect is a component in react which is run once when the component is rendered for first time 
    useEffect(() => { 
        fetchChats();
    }, []);

  return (
    <div>
      {chats.map((chat) => (
        <div key={chat._id}>{chat.chatName}</div>
      ))}
    </div>
  );
}

export default Chatpage