export default function HymnItem({ hymn }) {
  return (
    <div className="py-2">
      <div className="flex">
        <div className="flex-none px-1">{hymn.service}</div>
        <div className="flex-1 mb-1 border-b border-dashed border-stone-300"></div>
        <div className="flex-none px-1">{hymn.number}</div>
      </div>
      {/* TODO: Verify elipsis work. */}
      <div className="text-center">
        {hymn.link
          ? <a href={hymn.link} target="_blank" ref="noreferrer" className="elipsis">{hymn.title}</a>
          : <div>{hymn.title}</div>
        }
      </div>
    </div>
  );
}