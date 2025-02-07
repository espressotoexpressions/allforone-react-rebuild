
import { greaterLessService } from "../services/services.js";
import { useState } from "react";
import pinkMonster from "./pinkMonster.png";  
import homeBtn from "../../assets/HomeRightBtn.png";
import { Link } from "react-router-dom";

const GreaterLessComponent= ()=>{


    const [userInput1,setUserInput1] =useState('');
    const [userInput2,setUserInput2] =useState('');
    const [greaterLessMsg, setGreaterLessMsg] =useState('');

    const SubmitBtn = async()=>{
        setGreaterLessMsg(await greaterLessService(userInput1,userInput2));

    }
    return (
    <>
      <div class="flex" id="greaterLessContainer">
        <div class="flex mt-5">
            <div class="col-4 d-flex  flex-column justify-content-around">
                <div class="">
                    <h3 class="text-center">1ST NUMBER</h3>
                    <input type="text" class="w-100" id="firstNumInput"  onChange={(e)=>setUserInput1(e.target.value)}/>
                    
                </div>
                
                <div class="">
                    <h3 class="text-center"> 2nd Number</h3>
                    <input type="text" class="w-100 mb-3" id="secondNumInput"  onChange={(e)=>setUserInput2(e.target.value)}/>
                </div>
               <button id="greaterLessSubmitBtn" class="w-100" onClick={SubmitBtn}>  SUBMIT</button>
                
            </div>
            <div class="col-8 "> 
                <h2 class="babyJonesSolidFont text-center">IS IT GREATER THAN OR LESS THAN?</h2>
          
                <textarea readonly class="w-full p-4 border border-gray-300 rounded overflow-auto" id="greaterLessOutput" rows="4" value = {greaterLessMsg}></textarea>
                <div class="flex ">
                    <div class="col-8 overflow-hidden "><img 
// style="margin-bottom: -100px;" 
                    src={pinkMonster} alt="Pink Monster"/></div>
                    <div class="col-4 d-flex align-items-end mb-3">   <Link to='/' className="content-end ">
            <img className="h-[10em]"
              src={homeBtn}
              id="homeBtn"
              alt="Home Button" 
            />
          </Link></div>
                    
                </div>
            </div>
        </div>
    </div>

    </>
)

}
export default GreaterLessComponent;