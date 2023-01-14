export default function WardAnnouncement({organization, announcements}) {
  return (
    <div>
      <hr className="h-px my-4 bg-gray-400 border-0" />
      <h2 className="mb-2 text-lg font-semibold text-gray-900">{organization}:</h2>
      <ul className="max-w-md space-y-1 text-gray-800 list-disc list-inside">
        {announcements.map((announcement, index) => <li key={index}>{announcement}</li>)}
      </ul>
    </div>
  );
}