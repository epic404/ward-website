export default function SpeakerItem({ speaker }) {
  return (
    <div className="flex py-2">
      <div className="flex-none px-1">{speaker.type}</div>
      <div className="flex-1 mb-1 border-b border-dashed border-stone-300 height-18"></div>
      <div className="flex-none px-1">{speaker.name}</div>
    </div>
  );
}