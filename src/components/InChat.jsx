import FileChat from "./fragment/FileChat";
import TextChat from "./fragment/TextChat";

export default function InChat({ member, sender, message, imgurl }) {
  const senderName = member.find((m) => m.id === sender);

  return (
    <div className="flex justify-start">
      <div className="relative size-10 rounded-full overflow-hidden">
        <img src={senderName.pic} alt="Image" className="w-full h-full object-cover" draggable="false" />
      </div>
      <div className="pl-3 grid gap-1 max-w-[300px] md:max-w-[500px]">
        <div className="flex justify-between items-center">
          <h1 className="text-xs font-semibold">{senderName.name}</h1>
          <h1 className="text-xs">12:05</h1>
        </div>
        {!message ? <FileChat url={imgurl} /> : <TextChat color={`bg-wrapper`}>{message}</TextChat>}
      </div>
    </div>
  );
}
