import axios from "axios";

export const getArticles = () => {
  return axios.get('https://nc-news-today.herokuapp.com/api/articles').then(({data}) => {
    return data.articles;
  });
}