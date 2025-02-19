import {React, useState, useEffect} from "react"
import axios from "axios"
import { useParams } from "react-router-dom"

const PostComment = ({articleId}) => {
    const [body, setBody] = useState("")
    const [username, setUsername] = useState("")
    const [comment, setComment] = useState("")
    const [error, setError] = useState(null)
    const [successMessage, setSuccessMessage] = useState(null);
   const  commentURL = `https://nc-news-rk.onrender.com/api/articles/${articleId}/comments`

    const handleUsernameChange = (event) => {
        setUsername(event.target.value)
    }

    const handleBodyChange = (event) => {
        setBody(event.target.value)
    }

    const handleSubmit = (event) => {
        console.log("button clicked")
        event.preventDefault()
    
        if (!username || !body) {
            setError("Both username and comment body are required.");
            return;
          }

const newComment = {
    body: body,
    username: username,
}

console.log("sending comment", newComment)


    axios.post(commentURL, newComment)
.then((response) => {
    console.log(response.data.comment, "response")
    setUsername("")
    setBody("")
    setError(null)
    setSuccessMessage("Your comment was posted successfully!")
})
.catch((error) => {
    setError("Error posting comment, please try again later.")
    console.log(error)
})

    }
return(
    <>
    <div className="post-comment-container">
    <h3 className="post-comment-title">Post a comment</h3>
    <form onSubmit={handleSubmit} >
    <label htmlFor="username">Username: </label>
    <input value ={username}  onChange={handleUsernameChange} type="text" id="username"placeholder="Enter your username"/>
    <label htmlFor="body">Comment: </label>
    <input value={body} onChange={handleBodyChange} type="text" id="body"placeholder="Type your comment"/>
    <button type="submit" className="submit-button">Post Comment</button>
    <p>{error}</p>
    <p>{successMessage}</p>
    </form>
    </div>
    </>
)
}

export default PostComment