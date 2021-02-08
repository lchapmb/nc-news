import React from 'react'

function ArticlePreviewCard(article) {
  console.log(article)
  return (
    <div className="article-preview">
      <h4>{article.title}</h4>
      <ul>
        <li>By: {article.author}</li>
        <li>Topic: {article.topic}</li>
        <li>Votes: {article.votes}</li>
        <li>Published: {new Date(article.created_at).toUTCString()}</li>
      </ul>
    </div>
  );
}

export default ArticlePreviewCard
