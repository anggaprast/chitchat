import InChat from "./InChat";
import MyReply from "./MyReply";

export default function ChatBody({ data }) {
  const member = data.room.participant;
  const sendersId = data.room.participant.map((partic) => partic.id);
  const admin = sendersId[0];
  const agent = sendersId[1];
  const customer = sendersId[2];
  const comment = data.comments;
  return (
    <div className="h-[80%] flex flex-col gap-3 px-4 md:px-6 py-4 overflow-y-auto bg-secondary text-slate-200">
      {/* Looping conversation data */
      /* Pada real case, variable admin, agent, customer, maupun member lainnya akan bernilai sesuai id yang ter-login di masing-masing device member */
      /* Contoh pada case ini login sebagai agent */}
      {comment.map((chat) =>
        chat.sender !== agent ? (
          <InChat key={chat.id} member={member} sender={chat.sender} message={chat.type === "text" ? chat.message : ""} imgurl={chat.type !== "text" ? chat.message.url : ""} />
        ) : (
          <MyReply key={chat.id} message={chat.message} />
        )
      )}
    </div>
  );
}
