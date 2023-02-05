import './App.css';
import Home from './pages/Home';
import Login from './pages/Login'
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';


import { StyledContainer } from './components/Styles';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <StyledContainer>
        <Navbar />
        <Routes>
        <Route path="/" element={<Home />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/signup" element={<Signup />}/>
          <Route path="/dashboard" element={<Dashboard />}/>
          
          {/* <Route path="/dashboard">
            <Dashboard/>
          </Route>
          <Route path="/">
            <Home />
          </Route> */}
        </Routes>
      </StyledContainer>
    </Router>
  );
}

export default App;
