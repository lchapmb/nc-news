import './App.css';
import Title from './components/Title'
import ArticleList from './components/ArticlesList'
import NavBar from './components/NavBar'
import { Router } from '@reach/router';

function App() {
  return (
    <div className='App' >
      <Title />
      <Router>
        <ArticleList path='/' />
        <ArticleList path='/topic/:topic' />
      </Router>
      <NavBar />
    </div>
  );
}

export default App;
