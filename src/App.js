import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import Library from './components/Library';

function App() {
  return (
    <Router>
      <Route exact path='/' component={LoginPage} />
      <Route path='/library' component={Library} />
    </Router>
  );
}

export default App;
