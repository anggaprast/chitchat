export default function ActiveConv({ data, setShowChat }) {
  const room = data.room;
  const comments = data.comments;
  const part = room.participant;
  const nama = part.map((data) => data.name);

  return (
    <div className="px-3 md:px-6 h-[10%] flex justify-between md:gap-8 gap-3 items-center text-slate-200">
      <a href="#" className="md:hidden text-2xl p-1 rounded-full items-center" onClick={() => setShowChat(false)}>
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M19 11H7.83l4.88-4.88c.39-.39.39-1.03 0-1.42a.996.996 0 0 0-1.41 0l-6.59 6.59a.996.996 0 0 0 0 1.41l6.59 6.59a.996.996 0 1 0 1.41-1.41L7.83 13H19c.55 0 1-.45 1-1s-.45-1-1-1"
            />
          </svg>
        </span>
      </a>
      <a href="#" draggable="false" className="w-full">
        <div className="flex">
          <div className="relative size-12 rounded-full overflow-hidden">
            <img src={room.image_url} alt="Image" className="w-full h-full object-cover" draggable="false" />
          </div>
          <div className="pl-3 flex flex-col my-auto">
            <h1 className="text-lg font-semibold">{room.name}</h1>
            <h1 className="text-xs text-slate-400">{part.map((item) => item.name + `, `)}</h1>
          </div>
        </div>
      </a>
      <div className="flex text-3xl gap-4 md:gap-8 items-center">
        <button>
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
            <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21l-4.3-4.3" />
            </g>
          </svg>
        </button>
        <button>
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
            <path fill="currentColor" d="M12 14a2 2 0 1 0 0-4a2 2 0 0 0 0 4m-6 0a2 2 0 1 0 0-4a2 2 0 0 0 0 4m12 0a2 2 0 1 0 0-4a2 2 0 0 0 0 4" />
          </svg>
        </button>
      </div>
    </div>
  );
}
