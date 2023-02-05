import { useEffect, useState } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Announcements from './pages/Announcements';
import Services from './pages/Services';
import About from './pages/About';
import Business from './pages/Business';
import { useConfig } from './utils/useConfig';
import AppFooter from './components/AppFooter';
import MembersOnly from './pages/MembersOnly';
import NoConfig from './pages/NoConfig';

function App() {
  const [currentRoute, setRoute] = useState('');
  const [canViewServices, setCanViewServices] = useState(false);
  const location = useLocation();
  const config = useConfig();
  const isLocalhost = window.location.host === 'localhost:3000';
  const visibilityHash = window.location.search.split('=')[1] ?? 'NOT_FOUND';

  // TODO: Make custom hook
  useEffect(() => {
    setRoute(location.pathname)
  }, [location]);

  useEffect(() => {
    if (config) {
      setCanViewServices(visibilityHash === config.visibilityHash);
    }
  }, [config]);

  return [
    config?.hasConfig && canViewServices && (
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
        <AppFooter currentRoute={currentRoute} queryParam={`?hash=${visibilityHash}`} />
      </div>
    ),
    config?.hasConfig && !canViewServices && <MembersOnly />,
    !config?.hasConfig && <NoConfig />
  ];
}

export default App;
