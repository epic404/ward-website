import { useEffect } from 'react'
import ActionButton from '../components/ActionButton';
import HymnItem from '../components/HymnItem';
import SpeakerItem from '../components/SpeakerItem';
import OnTheStand from '../components/OnTheStand';

export default function Services({ config }) {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <img src="./modern-logo.png" className="zero-auto w-3/4 md:w-1/2 lg:w-1/4" alt="church-logo" />
      {/* <img src="./retro-logo.png" style="margin: 0 auto" className="zero-auto w-1/2 md:w-1/4" alt="church-logo" /> */}
      <div className="church-font text-center p-1 py-2">
        <p className="font-md">{config.ward}</p>
        <p className="font-lg">Sacrament Meeting</p>
        <p className="font-md">January 15, 2023</p>
        <hr className="h-px my-4 bg-gray-400 border-0" />
      </div>

      {config.broadcastLink &&
        <ActionButton link={config.broadcastLink} text="View Live Broadcast" />
      }

      <OnTheStand config={config} />

      <div className="text-center py-4">
        <em>Welcome & Announcements</em>
      </div>

      {/* <HymnItem hymn={config.openingHymn} /> */}

      {/* <SpeakerItem speaker={config.invocation} /> */}

      <div className="text-center py-4">
        <em>Ward Business</em>
      </div>

      {/* <HymnItem hymn={config.sacramentHymn} /> */}

      <div className="text-center py-4">
        <em>Administration of the Sacrament</em>
      </div>

      <div className="flex py-2">
        <div className="flex-none px-1">Speaker</div>
        <div className="flex-1 mb-1 border-b border-dashed border-stone-300"></div>
        <div className="flex-none px-1">Damario Gough</div>
      </div>

      <div className="flex py-2">
        <div className="flex-none px-1">Speaker</div>
        <div className="flex-1 mb-1 border-b border-dashed border-stone-300"></div>
        <div className="flex-none px-1">Jennifer Goodman</div>
      </div>

      <div className="flex py-2">
        <div className="flex-none px-1">Speaker</div>
        <div className="flex-1 mb-1 border-b border-dashed border-stone-300"></div>
        <div className="flex-none px-1">Clar Reynolds</div>
      </div>

      {/* <HymnItem hymn={config.closingHymn} /> */}

      {/* <SpeakerItem speaker={config.benediction} /> */}
    </div>
  )
};