import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage"
import ChatPage from "./components/ChatPage"
import {BrowserRouter, Routes, Route} from "react-router-dom";
import ContactPage from "./components/ContactPage";

function App() {
  const [chats, setChats] = useState("")


  useEffect(() => {
    fetch("http://localhost:9292/post")
        .then((r) => r.json())
        .then((chatArray) => {
            console.log(chatArray)
            setChats(chatArray)
        })
  }, [])

  return (
    <div className="app">
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element= {<HomePage/>}/>
          <Route path= "/chat" element= {<ChatPage/>}/>
          <Route path="/about" element= {<AboutPage/>}/>
          <Route path= "/contact" element= {<ContactPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;