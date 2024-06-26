import ActiveConv from "./ActiveConv";
import ChatBody from "./ChatBody";
import ReplyBody from "./ReplyBody";

export default function MainPanel({ data, user, setShowChat, handleReply }) {
  return (
    <div className="w-full h-screen md:w-[60%] lg:w-4/6">
      <ActiveConv data={data} setShowChat={setShowChat} />
      <ChatBody data={data} user={user} />
      <ReplyBody onReply={handleReply} user={user} />
    </div>
  );
}
