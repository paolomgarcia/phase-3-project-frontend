
import React, { useEffect, useState } from "react";
import NewChatForm from "./NewChatForm";
import ChatList from "./ChatList";
// import Search from "./Search";

function ChatPage() {
   // const [searchTerm, setSearch] = useState("")
    const [chats, setChats] = useState([])

    useEffect(() => {
        console.log("hello inside use effect")

        fetch(`http://localhost:9292/post`)
            .then((r) => r.json())
            .then((chatArray) => {
                // console.log("hello")
                setChats(chatArray)
            })
      }, [])
      

    //   console.log(chats)

    function handleAddChat(newChat){
        const updatedChats = [...chats, newChat]
         setChats(updatedChats);
       }
       const onDeletePost = (deletedPost) => {
        const updatedPosts = chats.filter(
          (post) => post.id !== deletedPost.id
        );
        setChats(updatedPosts);
      };

  return (
    <>
    <NewChatForm onAddChat = {handleAddChat}/>
    <ChatList onDeletePost = {onDeletePost} chats = {chats}/>
    </>
  );
  
}

export default ChatPage;