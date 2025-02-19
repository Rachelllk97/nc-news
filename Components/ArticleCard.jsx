import { Link } from "react-router";
const ArticleCard =({article}) => {

return (
            <section className="article-card-container">
                <h3 className="article-title">{article.title}</h3>
                <Link to={"/articles/" + article.article_id}>
                <img src ={article.article_img_url}/>
                </Link>
                    <p><strong>Topic: </strong>{article.topic}</p>
                    <p><strong>Author: </strong> {article.author}</p>
                    <p><strong>Body: </strong> {article.body}</p>
            </section>

)

}

export default ArticleCard