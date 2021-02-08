import './App.css';
import Title from './components/Title'
import ArticleList from './components/ArticlesList'
import NavBar from './components/NavBar'

function App() {
  return (
    <div className='App'>
      <Title />
      <ArticleList />
      <NavBar />
    </div>
  );
}

export default App;
