import FileChat from "./fragment/FileChat";
import TextChat from "./fragment/TextChat";

export default function InChat({ member, sender, message, imgurl }) {
  const who = member.reduce((me, m) => (m.id === sender ? m.name : me));
  return (
    <div className="flex">
      <div className="relative size-10 rounded-full overflow-hidden">
        <img src="./customer.jpg" alt="Image" className="w-full h-full object-cover" draggable="false" />
      </div>
      <div className="pl-3 grid gap-1 max-w-[300px] md:max-w-[500px]">
        <div className="flex justify-between items-center">
          <h1 className="text-xs font-semibold">{who}</h1>
          <h1 className="text-xs">12:05</h1>
        </div>
        {!message ? <FileChat url={imgurl} /> : <TextChat>{message}</TextChat>}
      </div>
    </div>
  );
}
