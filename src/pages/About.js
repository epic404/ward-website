import { useEffect } from 'react';
import { v4 } from 'uuid'
import config from '../config/_about.json';
import LeaderItem from '../components/LeaderItem';
import ActionButton from '../components/ActionButton';

export default function About() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <h1 className="text-center py-2 church-font font-lg">Ward Leadership</h1>
      <div className="font-sm">
        {config.leadership.map((leader) => <LeaderItem key={v4()} leader={leader} />)}
      </div>

      <div className="text-center text-stone-800 mt-8 italic">
        {config.scheduleLink
            ? `* Appointments with Bishop can be made over the phone with Brother Jarman or online:`
            : `* Appointments with Bishop can be made over the phone with Brother Jarman.`
        }
      </div>

      {config.scheduleLink &&
        <ActionButton link={config.scheduleLink} text="Schedule With Bishop" />
      }

      {/* TODO: Add section for our missionaries and their contact info. Maybe even a little avatar of them here w/ their assigned mission and dates */}
    </div>
  )
};