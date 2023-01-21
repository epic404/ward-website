import { useEffect, useState } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Announcements from './pages/Announcements';
import Services from './pages/Services';
import About from './pages/About';
import Business from './pages/Business';
import RouteLink from './components/RouteLink';
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

  return config && (
    <div>
      <img src={config.image} alt="church-logo" />,
      <div className="p-2">
        <Routes>
          <Route path="/services" element={<Services config={config} />} />
          <Route path="/announcements" element={<Announcements announcements={config.announcements} />} />
          <Route path="/about" element={<About />} />
          <Route path="/business" element={<Business />} />
          <Route path="/*" element={<Navigate replace to="/services" />} />
        </Routes>
      </div>

      {/* TODO: Make this a proper footer component w/ dark-ish bg. */}
      <hr className="h-px my-4 bg-gray-400 border-0" />

      <div className="py-2 mb-4 text-center">
        {currentRoute !== '/services' && <RouteLink route="/services" text="Back To Order of Services" />}
        {currentRoute === '/services' && <RouteLink route="/announcements" text="Announcements" />}
        {currentRoute === '/services' && <RouteLink route="/about" text="Ward Leadership" />}
        {currentRoute === '/announcements' && <RouteLink url={circlesUrl} text="Join The Conversation In Circles" />}
        {currentRoute === '/announcements' && <RouteLink url="https://www.churchofjesuschrist.org/calendar/month" text="View Ward Calendar" />}
      </div>
    </div>
  );
}

export default App;
