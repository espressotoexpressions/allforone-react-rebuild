
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
      <div className="flex flex-grow  justify-center items-center" id="greaterLessContainer">
        <div className="flex mt-5">
            <div className="flex flex-col p-10 gap-4">
                <div className="">
                    <h3 className="text-center text-6xl">1ST NUMBER</h3>
                    <input type="text" className="w-full text-center " id="firstNumInput"  onChange={(e)=>setUserInput1(e.target.value)}/>
                    
                </div>
                
                <div className="">
                    <h3 className="text-center text-6xl"> 2nd Number</h3>
                    <input type="text" className="w-full mb-3 text-center " id="secondNumInput"  onChange={(e)=>setUserInput2(e.target.value)}/>
                </div>
               <button id="greaterLessSubmitBtn" className="w-full" onClick={SubmitBtn}>  SUBMIT</button>
                
            </div>
            <div className=" p-10"> 
                <h2 className="babyJonesSolidFont text-center text-8xl">IS IT GREATER THAN OR LESS THAN?</h2>
          
                <textarea readonly className= "w-full p-4 border border-gray-300 rounded overflow-auto" id="greaterLessOutput" rows="4" value = {greaterLessMsg}></textarea>
                <div className="flex ">
                    <div className="overflow-hidden "><img 
className="mb-[-100px]" 
                    src={pinkMonster} alt="Pink Monster"/></div>
                    <div className="flex mb-3">   <Link to='/' className="content-end ">
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