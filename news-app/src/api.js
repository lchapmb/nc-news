import axios from "axios";

export const getArticles = (topic) => {
  const articleUrl = 'https://nc-news-today.herokuapp.com/api/articles';
  const path = topic ? `${articleUrl}?topic=${topic}` : articleUrl;
  return axios.get(path).then(({data}) => {
    return data.articles;
  });
}