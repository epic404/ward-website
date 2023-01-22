import { v4 } from 'uuid';

export default function Business({ business }) {
  return (
    <div>
      <h1 className="text-center py-2 church-font font-lg">Ward Business</h1>
      <div className="italic text-center uppercase">**discretionary information**</div>
      <hr className="h-px my-4 bg-gray-400 border-0" />

      {(business.baptisms?.length > 0) && (
        <div>
          <h2 className="mb-2 text-lg font-bold text-gray-900">Baptisms</h2>
          <ul>
            {business.baptisms.map((item) => <li key={v4()}>{item}</li>)}
          </ul>
        </div>
      )}
      {(business.ordinations?.length > 0) && (
        <div>
          <h2 className="mb-2 text-lg font-bold text-gray-900">Ordinations</h2>
          <ul>
            {business.ordinations.map((item) => <li key={v4()}>{item}</li>)}
          </ul>
        </div>
      )}
      {(business.moveins?.length > 0) && (
        <div>
          <h2 className="mb-2 text-lg font-bold text-gray-900">Move-ins</h2>
          <ul>
            {business.moveins.map((item) => <li key={v4()}>{item}</li>)}
          </ul>
        </div>
      )}
      {(business.other?.length > 0) && (
        <div>
          <h2 className="mb-2 text-lg font-bold text-gray-900">**Other</h2>
          <ul>
            {business.other.map((item) => <li key={v4()}>{item}</li>)}
          </ul>
        </div>
      )}
      {(business.releases?.length > 0) && (
        <div>
          <h2 className="mb-2 text-lg font-bold text-gray-900">Releases</h2>
          <ul>
            {business.releases.map((item) => <li key={v4()}>{item}</li>)}
          </ul>
        </div>
      )}
      {(business.callings?.length > 0) && (
        <div>
          <h2 className="mb-2 text-lg font-bold text-gray-900">Callings</h2>
          <ul>
            {business.callings.map((item) => <li key={v4()}>{item}</li>)}
          </ul>
        </div>
      )}
      {(business.deaths?.length > 0) && (
        <div>
          <h2 className="mb-2 text-lg font-bold text-gray-900">Deaths</h2>
          <ul>
            {business.deaths.map((item) => <li key={v4()}>{item}</li>)}
          </ul>
        </div>
      )}
    </div>
  );
}