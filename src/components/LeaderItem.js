export default function LeaderItem({ leader }) {
  return (
    <div className="py-1">
      <div className="italic font-bold font-bold">{leader.calling}:</div>
      <div className="flex">
        <div className="flex-none px-1">{leader.name}</div>
        <div className="flex-1 mb-1 border-b border-dashed border-stone-300"></div>
        <div className="flex-none px-1">{leader.phone}</div>
      </div>
    </div>
  );
}