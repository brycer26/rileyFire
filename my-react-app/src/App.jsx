import Header from './header/Header';
import HomePage from './pages/home';
import AboutUs from './pages/AboutUs';
import ServicesPage from './pages/Services';
import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<ServicesPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;