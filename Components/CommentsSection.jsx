import { useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import getComments from "./getComments";


const CommentsSection = () => {
const [comments, setComments] = useState([])
const {articleId} = useParams()

useEffect(() => {
    if (articleId) {
        getComments(articleId)
    .then((data) => {
        setComments(data.comments)
    })
    .catch((error) => {
        console.log(error)
    })
}
}, [articleId])

    return (
        <section className="comment-section-container">
            <h1 className="comment-title">Comments</h1>
            {comments.length === 0 ? (
                <p> No comments yet.Be the first to comment!</p>
            ) : (
                comments.map((comment, index) => (
                    <div key={index} >
                        <p className="comment"><strong>{comment.author}</strong> {comment.body}</p>
                    </div>
                ))
            )}
        </section>

    )
}

export default CommentsSection