import { useState } from "react";

export default function ReplyBody({ onReply, user }) {
  const [type, setType] = useState("text");
  const [message, setMessage] = useState("");
  function handleSend(e) {
    e.preventDefault();
    if (!message) return;

    const newMessage = {
      id: Date.now(),
      type,
      message,
      sender: user,
    };
    onReply(newMessage);
    setMessage("");
  }
  return (
    <div className="h-[10%] grid grid-cols-12 items-center px-4 md:px-6">
      <div className="w-full text-center">
        <button className="md:p-3 mx-auto md:bg-wrapper md:hover:bg-sky-600 rounded-xl text-slate-200 text-2xl">
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M11.314 3.121a5 5 0 1 1 7.07 7.071l-7.777 7.778a3 3 0 1 1-4.243-4.242l7.778-7.778l1.414 1.414l-7.778 7.778a1 1 0 1 0 1.414 1.414l7.779-7.778a3 3 0 1 0-4.243-4.243L4.95 12.314a5 5 0 0 0 7.07 7.07l8.486-8.485l1.414 1.415l-8.485 8.485a7 7 0 0 1-9.9-9.9z"
            />
          </svg>
        </button>
      </div>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type a message..."
        className="text-sm col-span-10 px-4 py-2 md:px-6 md:py-3 bg-wrapper border border-wrapper rounded-xl placeholder:text-slate-400 placeholder:text-sm focus:border-sky-600 focus:ring-none focus:outline-none focus:text-slate-100"></input>

      <button className="md:p-3 mx-auto rounded-xl md:bg-sky-600 text-slate-200 text-2xl" type="submit" onClick={handleSend}>
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="m3.4 20.4l17.45-7.48a1 1 0 0 0 0-1.84L3.4 3.6a.993.993 0 0 0-1.39.91L2 9.12c0 .5.37.93.87.99L17 12L2.87 13.88c-.5.07-.87.5-.87 1l.01 4.61c0 .71.73 1.2 1.39.91"
          />
        </svg>
      </button>
    </div>
  );
}
