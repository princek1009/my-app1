import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './components/Signup';

function App() {
  return (
    <Router>
  <Navbar />
    <Routes>
      <Route path='/' exact />
    </Routes>
    <SignUp></SignUp>
</Router>
  );
}

export default App;
