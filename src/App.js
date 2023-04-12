import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Admin from './pages/Admin';
import Teacher from './pages/teacher/Teacher';
import Student from './pages/Student';
import Contact from './pages/Contact';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function App() {
  return (
    <div >
      
      
      <Router>
      <Navbar/>
      
      <Routes>
      <Route path='/home' exact Component={Home}/>
      <Route path='/admin' exact Component={Admin}/>
      <Route path='/teacher' exact Component={Teacher}/>
      <Route path='/student' exact Component={Student}/>
      <Route path='/contact' exact Component={Contact}/>

      
      </Routes>
      </Router>
     
    </div>
  );
}

export default App;
