import { v4 } from 'uuid'

export default function AnnouncementItem({ organization, announcements }) {
  const lastAnnouncement = announcements.length - 1;
  return (
    <div>
      <hr className="h-px my-4 bg-gray-400 border-0" />
      <h2 className="mb-2 text-lg font-bold text-gray-900 text-center">{organization}</h2>
        {announcements.map((announcement, index) => {
          return (
            <div className="text-center" key={v4()}>
              {announcement}
              {index !== lastAnnouncement && <div className="text-center">✵ ✵ ✵</div>}
            </div>
          );
        })}
    </div>
  );
}