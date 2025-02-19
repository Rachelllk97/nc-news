import axios from 'axios'

const articlesURL = "https://nc-news-rk.onrender.com/api/articles"


const getArticles = () => {

return axios
.get(articlesURL)
.then((response) => {
    return response.data
})
.catch((error) => {
    console.log(error)
})
}

export default getArticles

