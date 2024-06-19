import InChat from "./InChat";
import MyReply from "./MyReply";

export default function ChatBody({ data, user }) {
  const member = data.room.participant;
  const comment = data.comments;

  return (
    <div className="h-[80%] flex flex-col gap-3 px-4 md:px-6 py-4 overflow-y-auto bg-secondary text-slate-200">
      {/* Looping conversation data  */}
      {comment.map((chat) =>
        chat.sender === user ? (
          <MyReply key={chat.id} message={chat.type === "text" ? chat.message : ""} imgurl={chat.type !== "text" ? chat.message.url : ""} />
        ) : (
          <InChat key={chat.id} member={member} sender={chat.sender} message={chat.type === "text" ? chat.message : ""} imgurl={chat.type !== "text" ? chat.message.url : ""} />
        )
      )}
    </div>
  );
}
