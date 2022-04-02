import './App.css';
import Home from '../Homepage/home.js';
import Dashboard from '../Dashboard/dashboard.js';
import OnBoarding from '../OnBoarding/onBoarding.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/onboarding" element={<OnBoarding/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
