import React from "react";
import ChatCard from "./ChatCard";

function ChatList({chats, onDeletePost}) {
    console.log(chats)
 const cards = chats.map((chat) => {
  return(
  <ChatCard key= {chat.id} 
    post = {chat}
    onDeletePost = {onDeletePost}
  />)
 })
  return (
    <ul className="cards">{cards}</ul>
  );
}

export default ChatList;
