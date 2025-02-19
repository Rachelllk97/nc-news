import { useParams } from "react-router-dom";
import ArticleCard from "./ArticleCard"
import getArticles from "./getArticles"
import { useState, useEffect} from "react";
import CommentsSection from "./CommentsSection";
import Votes from "./Votes";


const SingleArticle = () => {
    const [article, setArticle] = useState(null)
    const {articleId} = useParams()
    const [votes, setVotes] = useState(0)

    useEffect(() => {
        getArticles()
        .then((data) => {
            const article = data.articles.find(
                (article) => article.article_id === parseInt(articleId)
            )
            setArticle(article)
            setVotes(article ? article.votes : 0);
        }).catch((error) => {
            console.log(error)
        })
    }, [articleId])


    return(
        <>
        <div className="single-article-container">
        {article ? (
             <ArticleCard  article={article}/>
        ) : (
            <p>Loading...</p>
        )
    }
    </div>
    <div >
    {article ? (
        
             <CommentsSection articleId = {articleId} />
        ) : (
            <p>Loading...</p>
        )
    }
    </div>
    <div >
    {article ? (
        
             <Votes votes={votes} setVotes={setVotes} articleId={articleId} />
        ) : (
            <p>Loading...</p>
        )
    }
    </div>
        </>
    )
}


export default SingleArticle