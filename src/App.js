import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Sayfalar
import Home from './pages/home/homepage';
import Login from './pages/login/login';
import WebNavbar from './components/navbar/WebNavbar';
import MobileNavbar from './components/mobileNavbar/MobileNavbar';
import { useEffect, useState } from 'react';

function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Eğer ekran genişliği 768px veya daha küçükse mobil
    };

    handleResize(); // İlk renderda kontrol et
    window.addEventListener('resize', handleResize); // Ekran boyutu değişirse kontrol et

    return () => {
      window.removeEventListener('resize', handleResize); // Temizleme işlemi
    };
  }, []);

  return (
    <Router>
      <div className='App'>
        {/* Ekran boyutuna göre navbar'ı seç */}
        {isMobile ? <MobileNavbar /> : <WebNavbar />}
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
