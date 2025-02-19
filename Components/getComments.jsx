import axios from 'axios'

const getComments= (articleId) => {
    const commentsURL = `https://nc-news-rk.onrender.com/api/articles/${articleId}/comments`


return axios
.get(commentsURL)
.then((response) => {
    return response.data
})
.catch((error) => {
    console.log(error)
})
}

export default getComments

