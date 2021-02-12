import './App.css';
import Title from './components/Title';
import ArticleList from './components/ArticlesList';
import NavBar from './components/NavBar';
import ArticlePage from './components/ArticlePage';
import CommentList from './components/CommentList';
import { Router } from '@reach/router';
import Err from './components/Err';

function App() {
  return (
    <div className='App'>
      <Title />
      <Router>
        <ArticleList path='/' />
        <ArticleList path='/topic/:topic' />
        <ArticlePage path='/article/:article_id' />
        <CommentList path='/comments/:article_id' />
      </Router>
      <NavBar />
    </div>
  );
}

export default App;

// add a default
