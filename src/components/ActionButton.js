export default function ActionButton({ link, text }) {
  return (
    <div className="text-center py-2">
      <a href={link} target="_blank" rel="noreferrer">
        <button
          className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
          {text}
        </button>
      </a>
    </div>
  );
}