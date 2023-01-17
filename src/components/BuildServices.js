import HymnItem from './HymnItem';
import SpeakerItem from './SpeakerItem';

export default function BuildServices({ services }) {
  return services.map((item) => {
    if (item.service.toLowerCase().includes('speaker')) {
      return <SpeakerItem speaker={item} />;
    } else {
      return <HymnItem hymn={item} />;
    }
  })
}