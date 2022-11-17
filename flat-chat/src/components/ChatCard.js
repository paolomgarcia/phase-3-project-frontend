import React, {useState} from "react";

function ChatCard({post, onDeletePost}) {
  const [like, setLike] = useState(false)
  const {phase, topic, location, thread_post} = post

  const handleDeleteClick = () => {
    fetch(`http://localhost:9292/post/${post.id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then((deletedPost) => onDeletePost(deletedPost));
  }

  const handleLikeUpdate = () => {
    fetch(`http://localhost:9292/post/${post.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
    body: JSON.stringify({
        like: !like,
      }),
    })
      .then((r) => r.json())
      .then(data => setLike(data));
  }
  

  return(
    <div className="card">
    <div className="card-body">
        <h2 className="card-topic">{topic}</h2>
        <h3 className="card-phase">{phase}</h3>
        <p className="card-location">{location}</p>
        <p className="card-info">{thread_post}</p>

        {like ? (
        <button className="primary" onClick = {handleLikeUpdate}>👍</button>
      ) : (
        <button onClick = {handleLikeUpdate}>👎</button>
      )}
      <button onClick = {handleDeleteClick}>🗑</button>
    </div>
</div>
  );
}

export default ChatCard;
