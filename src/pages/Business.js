import { v4 } from 'uuid';
import BusinessItem from '../components/BusinessItem';
import businessConfig from '../config/_business.json';

export default function Business({ business }) {
  return (
    <div>
      <h1 className="text-center py-2 church-font font-lg">Announcements</h1>
      {
        businessConfig.business.map((config) => (business[config.type].length > 0) && (<BusinessItem key={v4()} config={config} items={business[config.type]} />))
      }
    </div>
  );
}