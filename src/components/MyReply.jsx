import FileChat from "./fragment/FileChat";
import TextChat from "./fragment/TextChat";

export default function MyReply({ message, imgurl }) {
  return (
    <div className="flex justify-end">
      <div className="max-w-[300px] md:max-w-[500px]">{!message ? <FileChat url={imgurl} /> : <TextChat color={`bg-sky-700`}>{message}</TextChat>}</div>
    </div>
  );
}
