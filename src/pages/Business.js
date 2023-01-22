export default function Business({ config }) {
  return (
    <div>
      <h1 className="text-center py-2 church-font font-lg">Ward Business</h1>
      <div className="italic text-center uppercase">**discretionary information**</div>
      <hr className="h-px my-4 bg-gray-400 border-0" />

      <h2 className="mb-2 text-lg font-bold text-gray-900">Baptisms</h2>
      <h2 className="mb-2 text-lg font-bold text-gray-900">Ordinations</h2>
      <h2 className="mb-2 text-lg font-bold text-gray-900">Move-ins</h2>
      <h2 className="mb-2 text-lg font-bold text-gray-900">**Other</h2>
      <h2 className="mb-2 text-lg font-bold text-gray-900">Releases</h2>
      <h2 className="mb-2 text-lg font-bold text-gray-900">Callings</h2>
      <h2 className="mb-2 text-lg font-bold text-gray-900">Deaths</h2>
    </div>
  );
}