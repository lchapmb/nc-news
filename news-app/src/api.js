import axios from 'axios';

export const getArticles = (topic, query = 'created_at', order = 'desc') => {
  const articleUrl = 'https://nc-news-today.herokuapp.com/api/articles/';
  const queryObj = { params: { sort_by: query, order: order } };
  const path = topic ? `${articleUrl}?topic=${topic}` : articleUrl;

  return axios.get(path, queryObj).then(({ data }) => {
    return data.articles;
  });
};

export const getSingleArticle = (id) => {
  const path = `https://nc-news-today.herokuapp.com/api/articles/${id}`;
  return axios.get(path).then(({ data }) => {
    return data.article;
  });
};

export const getComments = (id) => {
  const path = `https://nc-news-today.herokuapp.com/api/articles/${id}/comments/`;
  const queryObj = { params: { sort_by: 'created_at', order: 'desc' } };
  return axios.get(path, queryObj).then(({ data }) => {
    return data.comments;
  });
};

export const postNewComment = (comment, id) => {
  const path = `https://nc-news-today.herokuapp.com/api/articles/${id}/comments/`;
  return axios.post(path, comment).then(({ data }) => {
    return data.comment;
  });
};

export const deleteComment = (article, comment) => {
  const path = `https://nc-news-today.herokuapp.com/api/articles/${article}/comments/${comment}`;
  return axios.delete(path).then(({ data }) => {
    console.log(data);
    return data;
  });
};
