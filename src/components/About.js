import { useEffect } from 'react';
import config from '../config/_about.json';

export default function About() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <h1 className="text-center py-2 church-font font-lg">Ward Leadership</h1>
      <div className="condensed-text">
      {
        config.leadership.map((leader, index) => {
          // TODO: Turn this into a custom component.
          // TODO: Why this this error out and not count as a key?...
          return (
            <div className="py-1" key={leader.phone}>
              <div className="italic font-bold font-bold">{leader.calling}:</div>
              <div className="flex">
                <div className="flex-none px-1">{leader.name}</div>
                <div className="flex-1 mb-1 border-b border-dashed border-stone-300"></div>
                <div className="flex-none px-1">{leader.phone}</div>
              </div>
            </div>
          )
        })
      }
      </div>

      <div className="text-center text-stone-800 mt-8 italic">* Appointments with Bishop can be made over the phone with Brother Jarman or online:
      </div>

      {/* TODO: Turn this button into a custom component. */}
      <div className="text-center py-2">
        <a href={config.scheduleLink} target="_blank" rel="noreferrer">
          <button
            className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            Schedule With Bishop
          </button>
        </a>
      </div>

      {/* TODO: Add section for our missionaries and their contact info. Maybe even a little avatar of them here w/ their assigned mission and dates */}

    </div>
  )
};