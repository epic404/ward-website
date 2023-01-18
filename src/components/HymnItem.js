export default function HymnItem({ hymn }) {
  return (
    <div className="py-2">
      <div className="flex">
        <div className="flex-none px-1">{hymn.type}</div>
        <div className="flex-1 mb-1 border-b border-dashed border-stone-300"></div>
        <div className="flex-none px-1">{hymn.number}</div>
      </div>
      {/* TODO: Verify elipsis work. */}
      <div className="text-center truncate zero-auto max-75">
        {hymn.link
          ? <a href={hymn.link} target="_blank" rel="noreferrer" className="font-medium text-blue-600 underline">{hymn.title}</a>
          : <div>{hymn.title}</div>
        }
      </div>
    </div>
  );
}