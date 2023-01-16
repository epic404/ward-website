export default function AnnouncementItem({ organization, announcements }) {
  const lastAnnouncement = announcements.length - 1; // TODO: Verify that this works.

  return (
    <div>
      <hr className="h-px my-4 bg-gray-400 border-0" />
      <h2 className="mb-2 text-lg font-semibold text-gray-900">{organization}:</h2>
      <ul className="max-w-md space-y-1 text-gray-800 list-disc list-inside">
        {announcements.map((announcement, index) => {
          return (
            <li key={index}>
              {announcement}
              {index !== lastAnnouncement && <div class="text-center">* * *</div>}
            </li>
          );
        })}
      </ul>
    </div>
  );
}