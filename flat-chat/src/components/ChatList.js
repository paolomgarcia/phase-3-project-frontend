import React from "react";
import ChatPage from "./ChatPage";

function ChatList({chats}) {
 const cards = chats.map((chat) => {
  return(
  <ChatPage key= {chat.id} 
    chat = {chat}
  />)
 })
  return (
    <ul className="cards">{cards}</ul>
  );
}

export default ChatList;
