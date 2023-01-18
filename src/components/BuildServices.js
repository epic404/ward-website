import { v4 } from 'uuid'
import HymnItem from './HymnItem';
import SpeakerItem from './SpeakerItem';

export default function BuildServices({ services }) {
  return services.map((item) => {
    if (item.type.toLowerCase().includes('speaker')) {
      return <SpeakerItem speaker={item} key={v4()} />;
    } else {
      return <HymnItem hymn={item} key={v4()} />;
    }
  })
}