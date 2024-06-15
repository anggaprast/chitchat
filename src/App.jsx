import { useEffect } from "react";
import { useState } from "react";
import ConvList from "./components/ConvList";
import RightPanel from "./components/RightPanel";
import TopBar from "./components/TopBar";
import Welcome from "./components/Welcome";
// import result from "./chat_response.json";

export default function App() {
  const [data, setData] = useState("");
  // const [chats, setChats] = useState(result.results.comments);
  const [showChat, setShowChat] = useState(false);
  useEffect(() => {
    fetch("./chat_response.json")
      .then((response) => response.json())
      .then((data) => {
        setData(data.results);
      });
  }, []);

  const [chats, setChats] = useState([]);
  function handleReply(reply) {
    const newChats = [...chats, reply];
    setChats(newChats);
  }
  return (
    <>
      <div className="flex flex-col md:flex-row h-screen">
        <div className={`w-full md:w-[40%] lg:w-2/6 border-r-[1px] border-wrapper ${showChat ? "hidden md:block" : ""}`} id="mobileview">
          <TopBar />
          <ConvList data={data} setShowChat={setShowChat} />
        </div>
        {showChat ? <RightPanel data={data} setShowChat={setShowChat} handleReply={handleReply} /> : <Welcome />}
      </div>
    </>
  );
}
