import { v4 } from 'uuid';

export default function HymnItem({ hymn }) {
  hymn.truncate = hymn.truncate ?? true; // Default's to true.

  return (
    <div className="py-2">
      <div className="flex">
        <div className="flex-none px-1">{hymn.type}</div>
        <div className="flex-1 mb-1 border-b border-dashed border-stone-300 height-18"></div>
        {hymn.number && <div className="flex-none px-1">{hymn.number}</div>}
        {hymn.musicians && (
          <div className="flex-none px-1 text-right">
            {hymn.musicians.map((musician) => <div key={v4()}>{musician}</div>)}
          </div>
        )}
      </div>
      <div className={`text-center font-sm ${hymn.truncate ? 'truncate zero-auto max-75' : ''}`}>
        {hymn.link
          ? <a href={hymn.link} target="_blank" rel="noreferrer" className="font-medium text-teal-600 underline italic">{hymn.title}</a>
          : <div className="italic">{hymn.title}</div>
        }
      </div>
    </div>
  );
}

/**
 * Data for hymn items:
 * 
 * {
 *   type{string}: This is the type of hymn it is- Opening Hymn, Musical Number, etc.
 *   number{number}: The hymn number as found in the hymn book.
 *   musicians[{string}]: Array of names of performers.
 *   link{string}: Url to the hymn sheet music.
 *   title{string}: The name of the song/hymn.
 *   truncate{boolean}: If the song title should be truncated w/ ellipsis. Leave it alone unless you have a good reason not to.
 * }
 */
