export default function OnTheStand({ config }) {
  return [
    <div className="flex py-1" key={config.presiding}>
      <div className="flex-none px-1">Presiding</div>
      <div className="flex-1 mb-1 border-b border-dashed border-stone-300"></div>
      <div className="flex-none px-1">{config.presiding}</div>
    </div>,

    <div className="flex py-1" key={config.conducting}>
      <div className="flex-none px-1">Conducting</div>
      <div className="flex-1 mb-1 border-b border-dashed border-stone-300"></div>
      <div className="flex-none px-1">{config.conducting}</div>
    </div>,

    <div className="flex py-1" key={config.organist}>
      <div className="flex-none px-1">Organist</div>
      <div className="flex-1 mb-1 border-b border-dashed border-stone-300"></div>
      <div className="flex-none px-1">{config.organist}</div>
    </div>,

    <div className="flex py-1" key={config.chorister}>
      <div className="flex-none px-1">Chorister</div>
      <div className="flex-1 mb-1 border-b border-dashed border-stone-300"></div>
      <div className="flex-none px-1">{config.chorister}</div>
    </div>

  ];
}