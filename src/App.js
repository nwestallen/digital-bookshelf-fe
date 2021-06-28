import './App.less';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import Library from './components/Library';
import Banner from './components/Banner';

function App() {
  return (
    <Router>
      <Banner/>
      <Route exact path='/login' component={LoginPage} />
      <Route path='/library' component={Library} />
    </Router>
  );
};

export default App;
