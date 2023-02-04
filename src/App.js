import './App.css';
import Home from './pages/Home';

import { StyledContainer } from './components/Styles';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './components/Signup';

function App() {
  return (
    <StyledContainer>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact />
        </Routes>
        {/* <SignUp></SignUp> */}
      </Router>
      <Home/>
    </StyledContainer>
  );
}

export default App;
