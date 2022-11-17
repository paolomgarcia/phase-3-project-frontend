
import React, { useEffect, useState } from "react";
import NewChatForm from "./NewChatForm";
import ChatList from "./ChatList";
import Search from "./Search";

function ChatPage() {
    const [searchTerm, setSearch] = useState("")
    const [chats, setChats] = useState("")

    useEffect(() => {
        fetch("")
        .then((r) => r.json())
        .then((chatArray) => {setChats(chatArray)})
      }, [])

    function handleAddChat(newChat){
        const updatedChats = [...chats, newChat]
         setChats(updatedChats);
       }

    //const chatsToDisplay = chats.filter((chat) => {
   // return chat.phase.toLowerCase().includes(searchTerm.toLowerCase());
 // });
  return (
    <>
    <NewChatForm onAddChat = {handleAddChat}/>
    <Search  searchTerm={searchTerm} onSearchChange = {setSearch}/> 
    </>
  );
  
}

export default ChatPage;