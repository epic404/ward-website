import { getCirclesLink } from '../utils/getCirclesLink';
import RouteLink from './RouteLink';

export default function AppFooter({ currentRoute }) {
  const circlesUrl = getCirclesLink();

  return (
    <div className="p-2">
      <hr className="h-px my-4 bg-gray-400 border-0" />
      <div className="py-2 mb-8 text-center">
        {currentRoute !== '/services' && <RouteLink route="/services" text="Back To Order of Services" />}
        {currentRoute === '/services' && <RouteLink route="/announcements" text="View Announcements" />}
        {currentRoute === '/services' && <RouteLink route="/about" text="View Ward Leadership" />}
        {currentRoute === '/announcements' && <RouteLink url={circlesUrl} text="Join The Conversation In Circles" />}
        {currentRoute === '/announcements' && <RouteLink url="https://www.churchofjesuschrist.org/calendar/month" text="View Ward Calendar" />}
      </div>
    </div>
  );
}