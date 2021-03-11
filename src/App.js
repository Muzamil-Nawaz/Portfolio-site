import './App.css';
import Header from './components/Header'
import About from './components/About'
import {Route, BrowserRouter as Router} from 'react-router-dom'
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.min.js";

function App() {
  return (
    
    <div className="App">
    <Router>
     
      
       <Route path="/" component= {Header }/>
        
      </Router>
    </div>
  );
}

export default App;
