import './App.css';
import Header from './components/Header'
import About from './components/About'
import DisplaySkills from './components/DisplaySkills'
import Projects from './components/Projects'
// import {Route, BrowserRouter as Router} from 'react-router-dom'
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.min.js";

function App() {
  return (
    
    <div className="root">
      <Header />
      <About />
      <DisplaySkills />
      <Projects />
    </div>
  );
}

export default App;
