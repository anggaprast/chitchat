import { useEffect } from "react";
import { useState } from "react";
import ConvList from "./components/ConvList";
import MainPanel from "./components/MainPanel";
import TopBar from "./components/TopBar";
import Welcome from "./components/Welcome";
// import result from "./chat_response.json";

export default function App() {
  const [chats, setChats] = useState("");
  // const [chats, setChats] = useState(result.results.comments);
  const [showChat, setShowChat] = useState(false);
  useEffect(() => {
    fetch("./chat_response.json")
      .then((response) => response.json())
      .then((data) => {
        setChats(data.results);
      });
  }, []);

  function handleReply(reply) {
    const newData = [...chats, reply];
    setChats(newData);
  }
  return (
    <>
      <div className="flex flex-col md:flex-row h-screen">
        <div className={`w-full md:w-[40%] lg:w-2/6 border-r-[1px] border-wrapper ${showChat ? "hidden md:block" : ""}`} id="mobileview">
          <TopBar />
          <ConvList data={chats} setShowChat={setShowChat} />
        </div>
        {showChat ? <MainPanel data={chats} setShowChat={setShowChat} handleReply={handleReply} /> : <Welcome />}
      </div>
    </>
  );
}
