import axios from 'axios'

const NewsApi = axios.create({
    baseURL: "https://nc-news-rk.onrender.com/api"
})

export const fetchArticles = () => {
    return NewsApi.get("/articles").then((response) => {
        return response.json()
    })
}

