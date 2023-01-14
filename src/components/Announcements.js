import { useEffect } from 'react';
import WardAnnouncement from './WardAnnouncement';
import testConfig from '../config/announcements/_test.json';

export default function Announcements() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <h1 className="text-center py-2 church-font font-lg">Announcements</h1>
      {
        testConfig.announcements.map((item, index) => {
          if (item.announcements.length) {
            return <WardAnnouncement
                      key={index}
                      organization={item.organization}
                      announcements={item.announcements} />
          }
        })
      }
    </div>
  )
}