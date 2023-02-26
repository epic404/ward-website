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
  const [canViewServices, setCanViewServices] = useState(true);
  const location = useLocation();
  const config = useConfig();

  // TODO: Make hook or util.
  useEffect(() => {
    const secureHash = window.location.search.split('=')[1] ?? 'NOT_FOUND';
    localStorage.setItem('secureHash', secureHash);
  }, []);

  // TODO: Make custom hook
  useEffect(() => {
    setRoute(location.pathname)
  }, [location]);


  // TODO: Look into local storage and set it to expire after a day if you can.
  useEffect(() => {
    if (config) {
      const secureHash = localStorage.getItem('secureHash');
      const secureHashMatch = (secureHash === config.secureHash);
      setCanViewServices(secureHashMatch);
    }
  }, [config, currentRoute]);

  // TODO: change hymn and speaker "type" to be "label"
  // TODO: Update useConfig to use prev week's config if there's nothing for this week yet.
  // TODO: If there's nothing for last week either then show a UI at services only that we are working on it.
  // TODO: Add a nice full-page splash for unauthenticated component.
  // TODO: Add dropdown to select previous week's program
  // TODO: Add a JSON editor to create new JSON files and commit updates to the repo. Use Formik and taliwind for the form.
  // TODO: Add passcode's to the business page and /admin page.
  // TODO: Passcode to over-ride hash in all cases. Passcode entry is a hidden button.
  // TODO: Add the star dividers to ward business.
  // TODO: Create prompt components for ward business. Block quotes for what to say.
  //TODO: In schema, everywhere we have "organization" or "type", change to "label".
  
  return [
    (config?.hasConfig && canViewServices) && (
      <div key="200">
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
    (config?.hasConfig && !canViewServices) && (<MembersOnly key="403" />),
    !config?.hasConfig && (<NoConfig key="404" />)
  ];
}

export default App;
