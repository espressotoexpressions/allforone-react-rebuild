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
    <div id="askingQuestionsContainer" className="flex place-items-center w-full">
        
      <div className=" flex-col justify-items-between align-items-center">
        <h3 className=""> WHAT IS YOUR NAME?</h3>
        <input
          type="text"
          className=""
          id="nameInput"
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        />
        <h3 className="text-center"> WHAT TIME DID YOU WAKE UP?</h3>
        <input
          type="text"
          className=" mb-3"
          id="wakeUpInput"
          onChange={(e) => {
            setWakeupTime(e.target.value);
          }}
        />
        <div>
          <button
            id="askingQuestionsSubmitBtn"
            className="w-50"
            onClick={SubmitBtn}
          >
            SUBMIT
          </button>
        </div>
      </div>
      <div className="flex-col text-center">
        <h1 className="bobbyJonesOutlineFont">asking Questions</h1>

        <textarea
          className="p-5"
          id="askingQuestionsOutput" row="3"
          value={askQMsg}
        ></textarea>
      </div>

    </div>

    <div className="flex">
            <div className="col-10 d-flex justify-content-between overflow-hidden">
                <img 
                className="mb-[-200px]"
                 src={greenMonster} alt="Green Monster" />
            </div>
            <div className="col-2 d-flex align-items-end "> 
          <Link to='/' className="content-end ">
            <img className="h-[10em]"
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
