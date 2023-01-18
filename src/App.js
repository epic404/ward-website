import { useEffect, useState } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Announcements from './pages/Announcements';
import Services from './pages/Services';
import About from './pages/About';
import Business from './pages/Business';
import WardLink from './components/RouteLink';
import { getCirclesLink } from './utils/getCirclesLink';
import { useConfig } from './utils/useConfig';

function App() {
  const location = useLocation();
  const [currentRoute, setRoute] = useState('');
  const circlesUrl = getCirclesLink();
  const config = useConfig();

  useEffect(() => {
    setRoute(location.pathname)
  }, [location])

  return [
    config && <img key="app-img" src={config.image} alt="church-logo" />,
    config && <div key="app-routes" className="p-4">
      <Routes>
        <Route path="/services" element={<Services config={config} />} />
        <Route path="/announcements" element={<Announcements announcements={config.announcements} />} />
        <Route path="/about" element={<About />} />
        <Route path="/business" element={<Business />} />
        <Route path="/*" element={<Navigate replace to="/services" />} />
      </Routes>

      <div className="border border-gray-400 p-4 mt-8">
        {currentRoute !== '/services'  && <WardLink route="/services" text="Back to order of services" />}
        {currentRoute === '/services' && <WardLink route="/announcements" text="To announcements" />}
        {currentRoute === '/services' && <WardLink route="/about" text="To ward leadership" />}
        {currentRoute === '/about' && <WardLink url={circlesUrl} text="Join the discussion in Circles" />}
        {currentRoute === '/announcements' && <WardLink url="https://www.churchofjesuschrist.org/calendar/month" text="View ward calendar" />}
      </div>
    </div>
  ];
}

export default App;
