import brownMonster from "./brownmonster.png";
import homeBtn from "../../assets/HomeRightBtn.png";
import { oddEvenService } from "../services/services";
import { useState } from "react";
import { Link } from "react-router-dom";

const OddEvencomponent = () => {
  const [userInput, setUserInput] = useState("");
  const [oddEvenMsg, setOddEvenMsg] = useState("");

  const SubmitBtn = async () => {
    console.log(userInput);
    setOddEvenMsg(await oddEvenService(userInput));
  };

  return (
    <>
      <div className=" pe-5 pt-5" id="oddOrEvenContainer">
        {/* <!-- top Input section--> */}
        <div className="grid grid-cols-[1fr_1fr_2fr] gap-4 justify-between">
          <img
            className="ms-[-100px] mt-[-120px] h-auto w-auto object-contain"
            src={brownMonster}
            id="brownMonster"
            alt="Brown Monster"
          />

          <div className="flex items-center">
            
            <h1 className="bobbyJonesOutlineFont text-8xl ">ODD OR EVEN</h1>
          </div>
          <div className="flex flex-col justify-content-around gap-4">
           
              <h2 className="text-6xl text-center">ENTER A NUMBER</h2>
     
              <input
                type="text"
                className=" w-full h-full"
                id="oddOrEvenInput"
                placeholder="0"
                onChange={(e) => setUserInput(e.target.value)}
              />
     
            <div className="flex justify-center">
          
              <button id="oddEvenSubmitBtn" onClick={SubmitBtn} className="w-3/4">

                SUBMIT
              </button>
            </div>
          </div>
        </div>
        {/* <!--bottom result setion--> */}
        <div className="flex flex-col gap-4 m-10 justify-content-between justify-end h-">
          <h3 className="text-6xl"> THE ANSWER IS:</h3>

          <div className="flex place-content-between 0">
            <textarea
              readonly
              className="text-center justify-center"
              id="oddEvenOutput"
              value={oddEvenMsg}
            ></textarea>

            <Link to="/" className="content-end ">
              <img
                className="h-[5em]"
                src={homeBtn}
                id="homeBtn"
                alt="Home Button"
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default OddEvencomponent;
