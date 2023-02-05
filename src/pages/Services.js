import { useEffect } from 'react'
import ActionButton from '../components/ActionButton';
import HymnItem from '../components/HymnItem';
import SpeakerItem from '../components/SpeakerItem';
import BlockItem from '../components/BlockItem';
import OnTheStand from '../components/OnTheStand';
import BuildServices from '../components/BuildServices';
import TitleBlock from '../components/TitleBlock';

export default function Services({ config }) {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <TitleBlock ward={config.ward} />
      {config.broadcastLink &&
        <ActionButton link={config.broadcastLink} text="View Live Broadcast" />
      }
      <OnTheStand config={config} />
      <BlockItem item="Welcome & Announcements" />
      <HymnItem hymn={config.openingHymn} />
      <SpeakerItem speaker={config.invocation} />
      <BlockItem item="Ward Business" />
      <HymnItem hymn={config.sacramentHymn} />
      <BlockItem item="Administration of the Sacrament" />
      {!config.isFastSunday && 
        <BuildServices services={config.services} />
      }
      {config.isFastSunday && 
        <BlockItem item="Bearing of Testimonies" />
      }
      <HymnItem hymn={config.closingHymn} />
      <SpeakerItem speaker={config.benediction} />
    </div>
  )
};