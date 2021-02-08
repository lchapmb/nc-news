import React, { PureComponent } from 'react'
import ArticlePreviewCard from './ArticlePreviewCard.jsx'
import * as api from '../api'

class ArticlesList extends PureComponent {
  state = { articles: [
    {
      "article_id": 29,
      "title": "A BRIEF HISTORY OF FOOD—NO BIG DEAL",
      "body": "n 1686, the croissant was invented in Austria. That's a fun fact I'd probably never had known or maybe don't even really need to know, but now I do, thanks to Julia Rothman's Food Anatomy: The Curious Parts & Pieces of Our Edible World. Rothman has an entire series of illustrated Anatomy books, including Nature and Farm, packed with infographics, quirky facts, and maps that you can get lost in for hours—in a fun way, not in a boring textbook way. It makes you wonder why textbooks aren't this fun to read. Can someone look into this? Thanks.",
      "votes": 0,
      "topic": "cooking",
      "author": "tickle122",
      "created_at": "2017-03-11T13:20:18.573Z",
      "comment_count": "10"
    }
    ],
    isLoading: true
  }

  componentDidMount() {
    this.fetchArticles();
  }



  render() {
    const {articles} = this.state;
    return (
      <section className="article-list">
        <h2>Top Stories</h2>
        {articles.map((article) => {
          return <ArticlePreviewCard key={article.article_id} {...article}/>
        })}
      </section>
    );
  }

  fetchArticles() {
    api.getArticles().then((articles) => {
      this.setState({articles, isLoading: false}, console.log("set"))
    })
  }
}

export default ArticlesList