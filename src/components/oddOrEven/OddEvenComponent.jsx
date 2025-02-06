import brownMonster from "./brownmonster.png";
import homeBtn from "../../assets/HomeRightBtn.png";
import { oddEvenService } from "../services/services";
import { useState } from "react";

const OddEvencomponent = () => {
  const [userInput, setUserInput] = useState('');
  const [oddEvenMsg, setOddEvenMsg]=useState('');

  const SubmitBtn = async()=>{
    console.log(userInput);
    setOddEvenMsg (await oddEvenService(userInput));

  }

  return (
    <>
      <div class=" pe-5 pt-5" id="oddOrEvenContainer">
        {/* <!-- top Input section--> */}
        <div class="grid grid-cols-[1fr_1fr_2fr] gap-4 justify-between">
          <img
            className="ms-[-130px] mt-[-150px] h-[500px] w-auto"
            src={brownMonster}
            id="brownMonster"
            alt="Brown Monster"
          />

          <div class="col-3 text-center justify-content-center">
            {" "}
            <h1 class="bobbyJonesOutlineFont text-8xl">ODD OR EVEN</h1>
          </div>
          <div class="col-6 d-flex flex-column justify-content-around">
            <div class="row ">
              <h2>ENTER A NUMBER</h2>
            </div>
            <div class="row justify-content-center">
              <input
                type="text"
                class="w-75"
                id="oddOrEvenInput"
                placeholder="0"
                onChange={(e)=>setUserInput(e.target.value)}
              />
            </div>
            <div class="row justify-content-center ">
              {" "}
              <button id="oddEvenSubmitBtn" onClick={SubmitBtn} class="w-50">
                {" "}
                SUBMIT
              </button>
            </div>
          </div>
        </div>
        {/* <!--bottom result setion--> */}
        <div class=" px-5  justify-content-between overflow-hidden">
        
            <h3> THE ANSWER IS:</h3>
      
          <div class="flex">
            <textarea
              readonly
              class="w-100 px-6 py-3 form-control text-center justify-center"
              id="oddEvenOutput"
            value={oddEvenMsg}
            ></textarea>

          <a href="./menu.html">
            <img src={homeBtn} alt="Home Button" />
          </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default OddEvencomponent;
