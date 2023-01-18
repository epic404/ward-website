import { useEffect } from 'react';
import { v4 } from 'uuid'
import AnnouncementItem from '../components/AnnouncementItem';

export default function Announcements({ announcements }) {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <h1 className="text-center py-2 church-font font-lg">Announcements</h1>
      {announcements.length &&
        announcements.map((item) => <AnnouncementItem key={v4()} organization={item.organization} announcements={item.announcements} />)
      }
    </div>
  )
}