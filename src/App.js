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
  const isLocalhost = window.location.host === 'localhost:3000';
  const visibilityHash = window.location.search.split('=')[1] ?? 'NOT_FOUND';
  const canViewServices = isLocalhost || visibilityHash === config.visibilityHash;

  // TODO: Make custom hook
  useEffect(() => {
    setRoute(location.pathname)
    console.log(location)
  }, [location]);

  return [
    config && canViewServices && (
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
    ),
    !canViewServices && (<div>Visible to ward members only.</div>),
    !config && canViewServices && (<div>We are making assignments.</div>)
  ];
}

export default App;
