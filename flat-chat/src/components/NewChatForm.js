import React, {useState} from "react";

function NewChatForm({ onAddChat }) {
  const [phase, setPhase] = useState("")
  const [thread_post, setThread] = useState("")
  const [topic, setTopic] = useState("")
  const [location, setLocation] = useState("")

  function handleSubmit(e){
    e.preventDefault();
    fetch("http://localhost:9292/posts",{
    method: "POST",
    headers:{"Content-Type": "application/json",},
    body: JSON.stringify({
      phase: phase,
      topic: topic,
      location: location,
      thread_post: thread_post,
    }),
    })
    .then((r) => r.json())
    .then((newChat) => onAddChat(newChat));
  }

  return (
    <div className="new-chat-form">
      <h2>Send a Chat!</h2>
      <form onSubmit= {handleSubmit}>
      <input type="text" name="topic" placeholder="Topic" value= {topic} onChange= {(e)=> setTopic(e.target.value)}/>
        <input type="text" name="phase" placeholder="Phase #" value= {phase} onChange= {(e)=> setPhase(e.target.value)}/>
        <input type="text" name="location" placeholder="Location" value= {location} onChange= {(e) => setLocation(e.target.value)}/>
        <input type="text" name="thread_post" placeholder="Message" value= {thread_post} onChange= {(e)=> setThread(e.target.value)}/>
        <button className= "add-chat" type="submit">Send it!</button>
      </form>
    </div>
  );
}

export default NewChatForm;