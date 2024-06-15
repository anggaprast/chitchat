import { useState } from "react";

export default function ConvList({ data, setShowChat }) {
  if (!data || data.length === 0) return;
  const [active, setActive] = useState(false);
  const room = data.room;
  const comment = data.comments;
  const latestMessage = comment.reduce((latest, currentComment) => (currentComment.id > latest.id ? currentComment : latest));
  function handleActive() {
    setShowChat(true);
    setActive(true);
  }

  return (
    <div className="h-[90%] flex flex-col divide-y divide-wrapper overflow-y-auto pr-1 text-slate-200">
      {/* Group A */}
      <a href="#" draggable="false" className={`${active ? "active" : "hover:bg-bluebtn hover:bg-opacity-10"}`} onClick={() => handleActive()}>
        <div className="grid grid-cols-6 px-6 md:px-3 lg:px-6 py-3 items-center">
          <div className="relative size-14 md:size-12 lg:size-14 rounded-full overflow-hidden">
            <img src={room.image_url} alt="Image" className="w-full h-full object-cover drag-none" />
          </div>
          <div className="pl-3 grid gap-1 col-span-5">
            <div className="flex justify-between items-center">
              <h1 className="text-md md:text-sm lg:text-md font-semibold">{room.name}</h1>
              <h1 className="text-xs md:text-[10px] lg:text-xs text-slate-300">12:45</h1>
            </div>
            <div className="flex w-full justify-between items-center">
              <h1 className="w-72 md:w-52 lg:w-56 xl:w-72 truncate text-sm text-slate-300">{latestMessage.message}</h1>
            </div>
          </div>
        </div>
      </a>

      {/* Dummy room */}
      {/* Liam */}
      <a href="#" draggable="false" className="hover:bg-bluebtn hover:bg-opacity-10">
        <div className="grid grid-cols-6 px-6 py-3 items-center">
          <div className="relative size-14 rounded-full overflow-hidden">
            <img src="./customer.jpg" alt="Image" className="w-full h-full object-cover" />
          </div>
          <div className="pl-3 grid gap-1 col-span-5">
            <div className="flex justify-between items-center">
              <h1 className="text-md font-semibold">Liam Gallagher</h1>
              <h1 className="text-xs text-slate-300">12:05</h1>
            </div>
            <div className="flex w-full justify-between items-center">
              <h1 className="text-sm text-slate-300">Stand by me, nobody knows</h1>
              <h1 className="text-xs size-4 rounded-full bg-sky-600 text-center">1</h1>
            </div>
          </div>
        </div>
      </a>
      {/* Johnny */}
      <a href="#" draggable="false" className="hover:bg-bluebtn hover:bg-opacity-10">
        <div className="grid grid-cols-6 px-6 py-3 items-center">
          <div className="relative size-14 rounded-full overflow-hidden">
            <img src="./johnny.webp" alt="Image" className="w-full h-full object-cover" />
          </div>
          <div className="pl-3 grid gap-1 col-span-5">
            <div className="flex justify-between items-center">
              <h1 className="text-md font-semibold">Johhny Cash</h1>
              <h1 className="text-xs text-slate-300">12:00</h1>
            </div>
            <div className="flex w-full justify-between items-center">
              <h1 className="text-sm text-slate-300">I fell in to a burning ring of fire</h1>
              <h1 className="text-xs size-4 rounded-full bg-sky-600 text-center">1</h1>
            </div>
          </div>
        </div>
      </a>
      {/* Rod */}
      <a href="#" draggable="false" className="hover:bg-bluebtn hover:bg-opacity-10">
        <div className="grid grid-cols-6 px-6 py-3 items-center">
          <div className="relative size-14 rounded-full overflow-hidden">
            <img src="./jason.jpg" alt="Image" className="w-full h-full object-cover" />
          </div>
          <div className="pl-3 grid gap-1 col-span-5">
            <div className="flex justify-between items-center">
              <h1 className="text-md font-semibold">Rod Stewart</h1>
              <h1 className="text-xs text-slate-300">12:00</h1>
            </div>
            <div className="flex w-full justify-between items-center">
              <h1 className="text-sm text-slate-300">I don't want to talk about it</h1>
              <h1 className="text-xs size-4 rounded-full bg-sky-600 text-center">1</h1>
            </div>
          </div>
        </div>
      </a>
      {/* Chris */}
      <a href="#" draggable="false" className="hover:bg-bluebtn hover:bg-opacity-10">
        <div className="grid grid-cols-6 px-6 py-3 items-center">
          <div className="relative size-14 rounded-full overflow-hidden">
            <img src="./angga.jpg" alt="Image" className="w-full h-full object-cover" />
          </div>
          <div className="pl-3 grid gap-1 col-span-5">
            <div className="flex justify-between items-center">
              <h1 className="text-md font-semibold">Chris Martin</h1>
              <h1 className="text-xs text-slate-300">12:00</h1>
            </div>
            <div className="truncate flex justify-between items-center">
              <h1 className="text-sm text-slate-300">Nobody say it was easy</h1>
              <h1 className="text-xs size-4 rounded-full bg-sky-600 text-center">1</h1>
            </div>
          </div>
        </div>
      </a>
      {/* Chris */}
      <a href="#" draggable="false" className="hover:bg-bluebtn hover:bg-opacity-10">
        <div className="grid grid-cols-6 px-6 py-3 items-center">
          <div className="relative size-14 rounded-full overflow-hidden">
            <img src="./johnny.webp" alt="Image" className="w-full h-full object-cover" />
          </div>
          <div className="pl-3 grid gap-1 col-span-5">
            <div className="flex justify-between items-center">
              <h1 className="text-md font-semibold">Chris Martin</h1>
              <h1 className="text-xs text-slate-300">12:00</h1>
            </div>
            <div className="truncate flex justify-between items-center">
              <h1 className="text-sm text-slate-300">Nobody say it was easy</h1>
              <h1 className="text-xs size-4 rounded-full bg-sky-600 text-center">1</h1>
            </div>
          </div>
        </div>
      </a>
      {/* Chris */}
      <a href="#" draggable="false" className="hover:bg-bluebtn hover:bg-opacity-10">
        <div className="grid grid-cols-6 px-6 py-3 items-center">
          <div className="relative size-14 rounded-full overflow-hidden">
            <img src="./angga.jpg" alt="Image" className="w-full h-full object-cover" />
          </div>
          <div className="pl-3 grid gap-1 col-span-5">
            <div className="flex justify-between items-center">
              <h1 className="text-md font-semibold">Chris Martin</h1>
              <h1 className="text-xs text-slate-300">12:00</h1>
            </div>
            <div className="truncate flex justify-between items-center">
              <h1 className="text-sm text-slate-300">Nobody say it was easy</h1>
              <h1 className="text-xs size-4 rounded-full bg-sky-600 text-center">1</h1>
            </div>
          </div>
        </div>
      </a>
      {/* Chris */}
      <a href="#" draggable="false" className="hover:bg-bluebtn hover:bg-opacity-10">
        <div className="grid grid-cols-6 px-6 py-3 items-center">
          <div className="relative size-14 rounded-full overflow-hidden">
            <img src="./customer.jpg" alt="Image" className="w-full h-full object-cover" />
          </div>
          <div className="pl-3 grid gap-1 col-span-5">
            <div className="flex justify-between items-center">
              <h1 className="text-md font-semibold">Chris Martin</h1>
              <h1 className="text-xs text-slate-300">12:00</h1>
            </div>
            <div className="truncate flex justify-between items-center">
              <h1 className="text-sm text-slate-300">Nobody say it was easy</h1>
              <h1 className="text-xs size-4 rounded-full bg-sky-600 text-center">1</h1>
            </div>
          </div>
        </div>
      </a>
      {/* Chris */}
      <a href="#" draggable="false" className="hover:bg-bluebtn hover:bg-opacity-10">
        <div className="grid grid-cols-6 px-6 py-3 items-center">
          <div className="relative size-14 rounded-full overflow-hidden">
            <img src="./jason.jpg" alt="Image" className="w-full h-full object-cover" />
          </div>
          <div className="pl-3 grid gap-1 col-span-5">
            <div className="flex justify-between items-center">
              <h1 className="text-md font-semibold">Chris Martin</h1>
              <h1 className="text-xs text-slate-300">12:00</h1>
            </div>
            <div className="truncate flex justify-between items-center">
              <h1 className="text-sm text-slate-300">Nobody say it was easy</h1>
              <h1 className="text-xs size-4 rounded-full bg-sky-600 text-center">1</h1>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}
