import ArticleCard from "./ArticleCard";
import getArticles from "./getArticles"
import { useState, useEffect} from "react";

const ArticleList =() => {
    const [articles, setArticles] = useState([])

useEffect(() => {
    getArticles()
    .then((data) => {
        setArticles(data.articles)
    }).catch((error) => {
        console.log(error)
    })
}, [])

return (
    <ol className="article-list-container">
        {articles.map((article) => (
            <ArticleCard key={article.article_id} article={article}/>
        ))}
    </ol>
)

}

export default ArticleList