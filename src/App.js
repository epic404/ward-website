import { useEffect, useState } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Announcements from './pages/Announcements';
import Services from './pages/Services';
import About from './pages/About';
import WardLink from './components/RouteLink';
import { getCirclesLink } from './utils/getCirclesLink';

function App() {
  const location = useLocation();
  const [currentRoute, setRoute] = useState('');
  const circlesUrl = getCirclesLink();

  useEffect(() => {
    setRoute(location.pathname)
  }, [location])

  return [
    <img src="https://assets.churchofjesuschrist.org/03/b1/03b1fc836e4da44c1b912407054ff9bc7b32304c/jesus_christ_nephites_book_mormon.png" alt="church-logo" />,
    <div className="p-4">
      <Routes>
        <Route path="/services" element={<Services />} />
        <Route path="/announcements" element={<Announcements />} />
        <Route path="/about" element={<About />} />
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
