import React from 'react'
import { Link } from '@reach/router';

function ArticlePreviewCard(article) {
  const articleId = article.article_id;
  return (
    <div className='article-preview'>
      <h4>
        <Link to={`/article/${articleId}`}>{article.title}</Link>
      </h4>
      <ul>
        <li>By: {article.author}</li>
        <li>Topic: {article.topic}</li>
        <li>Votes: {article.votes}</li>
        <li>Published: {new Date(article.created_at).toDateString()}</li>
      </ul>
    </div>
  );
}

export default ArticlePreviewCard
