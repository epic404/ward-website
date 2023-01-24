import { useEffect, useState } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Announcements from './pages/Announcements';
import Services from './pages/Services';
import About from './pages/About';
import Business from './pages/Business';
import { useConfig } from './utils/useConfig';
import AppFooter from './components/AppFooter';

function App() {
  const location = useLocation();
  const [currentRoute, setRoute] = useState('');
  const config = useConfig();

  useEffect(() => {
    setRoute(location.pathname)
  }, [location])

  if (!config) {
    return (<div>Do your ministring and check back</div>); // TODO
  }

  return (
    <div>
      <img src={config.image} alt="church-logo" />
      <div className="p-2">
        <Routes>
          <Route path="/services" element={<Services config={config} />} />
          <Route path="/announcements" element={<Announcements announcements={config.announcements} />} />
          <Route path="/about" element={<About />} />
          <Route path="/business" element={<Business business={config.wardBusiness} />} />
          <Route path="/*" element={<Navigate replace to="/services" />} />
        </Routes>
      </div>
    <AppFooter currentRoute={currentRoute} />
    </div>
  );
}

export default App;
