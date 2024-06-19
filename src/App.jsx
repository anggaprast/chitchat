import { useEffect } from "react";
import { useState } from "react";
import ConvList from "./components/ConvList";
import MainPanel from "./components/MainPanel";
import TopBar from "./components/TopBar";
import Welcome from "./components/Welcome";

export default function App() {
  const [result, setResult] = useState("");
  const [showChat, setShowChat] = useState(false);
  useEffect(() => {
    fetch("./chat_response.json")
      .then((response) => response.json())
      .then((data) => {
        setResult(data.results);
      });
  }, []);
  // console.log(result);
  if (!result || result.length === 0) return;
  const sendersId = result.room.participant.map((partic) => partic.id);
  const admin = sendersId[0];
  const agent = sendersId[1];
  const customer = sendersId[2];

  //handle_login() //Hard Code for example
  const login_as = customer; // try swith to admin or agent

  function handleReply(reply) {
    const newComment = [...result.comments, reply];
    const newResult = { ...result, comments: newComment };
    setResult(newResult);
  }
  return (
    <>
      <div className="flex flex-col md:flex-row h-screen">
        <div className={`w-full md:w-[40%] lg:w-2/6 border-r-[1px] border-wrapper ${showChat ? "hidden md:block" : ""}`} id="mobileview">
          <TopBar />
          <ConvList data={result} user={login_as} setShowChat={setShowChat} />
        </div>
        {showChat ? <MainPanel data={result} user={login_as} setShowChat={setShowChat} handleReply={handleReply} /> : <Welcome />}
      </div>
    </>
  );
}
