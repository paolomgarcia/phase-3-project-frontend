import React, { useEffect, useState } from "react";
import NewChatForm from "./NewChatForm";
import ChatList from "./ChatList";
import Search from "./Search";

function HomePage() {

  const [chats, setChats] = useState([])
  

  useEffect(() => {
    fetch("")
    .then((r) => r.json())
    .then((chatArray) => {setChats(chatArray)})
  }, [])

  function handleAddChat(newChat){
   const updatedChats = [...chats, newChat]
    setChats(updatedChats);
  }
  

  return (
    <h3 className="slogan">
      "Your place for all Flatiron School communications."
    </h3>
  );
}

export default HomePage;
