import {BrowserRouter as Router } from 'react-router-dom';
import {Routes} from './routes';

import Header from './components/template/Header/Header';
import Sidebar from './components/template/Sidebar/Sidebar';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <>
    <Header/>
    <div className="main-container">
    {/* <Sidebar/> */}
      <Router>
        <Routes/>
      </Router>
    </div>
    </>
  );
}

export default App;
