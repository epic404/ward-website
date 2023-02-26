import { v4 } from 'uuid'

export default function BusinessItem({ config, items }) {
  const lastItem = items.length - 1;
  return (
    <div>
      <hr className="h-px my-4 bg-gray-400 border-0" />
      <h2 className="mb-2 text-lg font-bold text-gray-900 text-center">{config.label}</h2>
      {config.prompt && <h3 className="border-l-4 border-slate-300 rounded-r-md bg-slate-200 p-2 m-2">{config.prompt}</h3>}
      {items.map((item, index) => {
        return (
          <div className="text-center" key={v4()}>
            {item}
            {index !== lastItem && <div className="text-center">✵ ✵ ✵</div>}
          </div>
        );
      })}
      {config.promptEnd && <h3 className="border-l-4 border-slate-300 rounded-r-md bg-slate-200 p-2 m-2">{config.promptEnd}</h3>}
    </div>
  );
}