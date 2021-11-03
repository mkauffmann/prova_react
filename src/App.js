import {BrowserRouter as Router } from 'react-router-dom';
import {Routes} from './routes';

import Header from './components/template/Header/Header';
import Sidebar from './components/template/Sidebar/Sidebar';

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';


function App() {
  return (
    <>
    <Header/>
    <Sidebar/>
    <div className="main-container">
      <Router>
        <Routes/>
      </Router>
    </div>
    </>
  );
}

export default App;
