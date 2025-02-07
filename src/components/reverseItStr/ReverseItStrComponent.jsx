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
      <div class="flex" id="reverseStrContainer">
        <div class="flex vh-full">
          {/* <!-- left images--> */}
          <div class="d-flex flex-column">
           
              <img
                //   style="margin-left: -200px; margin-top: 150px;"
                src={lightOrangeMonster}
                id="lightOrangeMonsterImg"
                alt="Light orangeMonster Monster"
              />
           
            <div class=" mt-auto mb-5 pb-5">
              <a href="./menu.html">
                <img src={homeBtn} alt="Home Button" />
              </a>
            </div>
          </div>

          {/* <!--right input/output section--> */}
          <div class="p-5">
            <h2 class="bobbyJonesOutlineFont text-center">REVERSE STRING</h2>
            <div class="row">
              <h3>ENTER TEXT TO REVERSE</h3>
              <textarea
                class="w-full form-control"
                id="reverseStrInput"
                rows="3"
                onChange={(e) => setUserInput(e.target.value)}
              ></textarea>
              <div class="flex justify-center my-5">
                <button
                  id="reverseStrSubmitBtn"
                  onClick={SubmitBtn}
                  class="w-1/2"
                >
                  SUBMIT
                </button>
              </div>
            </div>
            <div class="row">
              <h3>YOUR REVERSED TEXT</h3>
              <textarea
                class="w-100 form-control"
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
