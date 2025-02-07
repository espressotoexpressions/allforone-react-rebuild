import { reverseStrService } from "../services/services.js";
import { useState } from "react";
import lightOrangeMonster from "./lightOrangeMonster.png";
import homeBtn from "../../assets/HomeLeftBtn.png";
import { Link } from "react-router-dom";

const ReversetItStrComponent = () => {
  const [userInput, setUserInput] = useState("");
  const [reverseItMsg, setReverseItMsg] = useState("");

  const SubmitBtn = async () => {
    setReverseItMsg(await reverseStrService(userInput));
  };

  return (
    <>
      <div class="flex  flex-grow" id="reverseStrContainer">
        <div class="grid grid-cols-2 place-items-center ">
          {/* <!-- left images--> */}
          <div class=" ">
           
              <img
                  className=" object-contain w-auto"
                src={lightOrangeMonster}
                id="lightOrangeMonsterImg"
                alt="Light orangeMonster Monster"
              />
           
            <div class=" flex justify-center items-center mt-auto mb-5 pb-5">
            <Link to='/' className=" ">
            <img className="h-[5em]"
              src={homeBtn}
              id="homeBtn"
              alt="Home Button" 
            />
          </Link>
            </div>
          </div>

          {/* <!--right input/output section--> */}
          <div class="p-5 flex flex-col flex-grow items-center">
            <h2 class="bobbyJonesOutlineFont  text-8xl">REVERSE STRING</h2>
            <div class="">
              <h3 className="text-6xl">ENTER TEXT TO REVERSE</h3>
              <textarea
                class="w-full "
                id="reverseStrInput"
                rows="3"
                onChange={(e) => setUserInput(e.target.value)}
              ></textarea>
              <div class="my-5 text-center">
                <button
                  id="reverseStrSubmitBtn"
                  onClick={SubmitBtn}
                  class="w-1/2"
                >
                  SUBMIT
                </button>
              </div>
            </div>
            <div class="">
              <h3 className="text-6xl">YOUR REVERSED TEXT</h3>
              <textarea
                class=""
                id="reverseStrOutput"
                rows="3"
                value={reverseItMsg}
              ></textarea>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ReversetItStrComponent;
