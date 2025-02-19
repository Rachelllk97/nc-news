import axios from "axios"
import {useState} from 'react'

const Votes = ({votes, setVotes, articleId}) => {
    const [error, setError] = useState(null)

    const handleVote = (increment) => {
        const newVote = {inc_votes: increment}

        setVotes((prevVotes) => prevVotes + increment)
        setError(null)

        axios.patch(`https://nc-news-rk.onrender.com/api/articles/${articleId}`, newVote)
        .then((response) => {
            const updatedArticle = response.data
            setVotes(updatedArticle.votes)
        })
        .catch((error) => {
            console.log(error)
            setVotes((prevVotes) => prevVotes - increment)
            setError('Failed to update votes. Please try again later.')
        })
    }
 

return (
    <>
        <div className="votes-container" >
    <p><strong>Votes: {votes}</strong></p>
    <p>{error}</p>
    <button className= "votes-button" onClick={() => handleVote(1)}><strong>Vote</strong></button>
    <button className= "votes-button" onClick={() => handleVote(-1)}><strong>Remove Vote</strong></button>
        </div>
    </>
)

}

export default Votes;