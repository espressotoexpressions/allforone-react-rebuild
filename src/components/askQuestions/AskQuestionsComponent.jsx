import { askingQuestionsService } from "../services/services";
import { useState } from "react";
import greenMonster from "./greenMonster.png";
import homeBtn from "../../assets/HomeRightBtn.png";
import { Link } from "react-router-dom";

const AskQuestionsComponent = () => {
  const [userName, setUserName] = useState("");
  const [wakeupTime, setWakeupTime] = useState("");
  const [askQMsg, setAskQMsg] = useState("");

  const SubmitBtn = async () => {
    setAskQMsg(await askingQuestionsService(userName, wakeupTime));
  };

  return (
    <>
    <div id="askingQuestionsContainer" className="flex w-full p-5">
        
      <div className="flex flex-col  items-center gap-4 p-10">
        <h3 className="text-center text-6xl"> WHAT IS YOUR NAME?</h3>
        <input
          type="text "
          className="w-3/4"
          id="nameInput"
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        />
        <h3 className="text-center text-6xl"> WHAT TIME DID YOU WAKE UP?</h3>
        <input
          type="text"
          className="w-3/4"
          id="wakeUpInput"
          onChange={(e) => {
            setWakeupTime(e.target.value);
          }}
        />

          <button
            id="askingQuestionsSubmitBtn"
            className="w-1/2"
            onClick={SubmitBtn}
          >
            SUBMIT
          </button>

      </div>
      <div className="flex flex-col justify-center text-center">
        <h1 className="bobbyJonesOutlineFont text-8xl">asking Questions</h1>

        <textarea
          className="p-5"
          id="askingQuestionsOutput" rows="3"
          value={askQMsg} 
          readOnly
        ></textarea>
      </div>

    </div>

    <div className="flex justify-center w-full ">
            <div className="justify-content-between overflow-hidden ">
                <img 
                className="mb-[-200px]"
                 src={greenMonster} alt="Green Monster" />
            </div>
            <div className="flex justify-center items-end "> 
          <Link to='/' className="">
            <img className="h-[10em] "
              src={homeBtn}
              id="homeBtn"
              alt="Home Button" 
            />
          </Link>
          </div>
        </div> 
    </>
  );
};
export default AskQuestionsComponent;
