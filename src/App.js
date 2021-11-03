import {BrowserRouter as Router } from 'react-router-dom';
import {Routes} from './routes';

import Header from './components/template/Header/Header';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="main-container">
      <Header/>
      <Router>
        <Routes/>
      </Router>
    </div>
  );
}

export default App;
