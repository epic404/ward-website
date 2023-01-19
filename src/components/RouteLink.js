import { Link } from 'react-router-dom';

export default function RouteLink({ text, route, url }) {
  return (
    <div className="underline">
      {route && <Link to={route}>
        <p className="py-1 font-route font-semibold">
          {text}
        </p>
      </Link>}
      {url && <a href={url} target="_blank" rel="noreferrer">
        <p className="py-1 font-route font-semibold">
          {text}
        </p>
      </a>}
    </div>
  );
}