import React, { PureComponent } from 'react'
import ArticlePreviewCard from './ArticlePreviewCard.jsx'
import * as api from '../api'

class ArticlesList extends PureComponent {
  state = { articles: [],
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
        {this.state.isLoading ? (<p>Loading articles...</p>) :
        (articles.map((article) => {
          return <ArticlePreviewCard key={article.article_id} {...article}/>
        }))}
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