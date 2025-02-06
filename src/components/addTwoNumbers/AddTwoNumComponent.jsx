import blueLightMonster from "./bluelightMonster.png";
import homeBtn from "../../assets/HomeRightBtn.png";
import { addTwoNumService } from "../services/services";
import { useState } from "react";

const AddTwoNumComponent = () => {

const [userInput1,setUserInput1] =useState('');
const [userInput2,setUserInput2] =useState('');
const [sumMsg, setSumMsg] =useState('');


const SubmitBtn = async()=>{
              
            console.log("ENTER Sibmit");
            setSumMsg (await addTwoNumService(userInput1,userInput2));
            console.log("sum"+ sumMsg);
          
        }
  console.log("ENTER ADD TWO NUM");
  return (
    <>
      <h2 className="bobbyJonesSolidFont text-center my-5">ADD 2 NUMBERS</h2>
      <div className="flex" id="add2NumbersContainer">
        <div className="w-2/3 text-center">
          <div className="add2NumbersInputHeader mb-3">1ST NUMBER</div>
          <input type="text" className="" id="firstNumInput"
        //    placeholder="0" 
           onChange={(e)=>setUserInput1(e.target.value)}/>
        </div>
        <div className="w-1/3">
          {/* <div className="row-10 flex- "> */}
          <h1 className="text-[300px] text-black bobbyJonesSolidFont justify-content-center align-items-center">
            +
          </h1>
          {/* </div> */}
        </div>
        <div className="w-2/3">
          <div className="add2NumbersInputHeader">2ND NUMBER</div>
          <div className="row-10">
            <input
              type="text"
              className="w-100"
              id="secondNumInput"
            //   placeholder="0"
              onChange={(e)=>setUserInput2(e.target.value)}
            />
          </div>
        </div>
      
      </div>

    
      <div className="text-center mb-3 w-100">
          <button id="add2NumbersSubmitBtn" onClick={SubmitBtn} className="">
            SUBMIT
          </button>
        </div>
      <div className="flex">
        {/* <div className="row"> */}
          <div className="col-5 d-flex  align-items-center justify-content-start overflow-hidden">
            <img
              //   style="margin-bottom: -200px; margin-left: -150px;"
              className="-mb-[200px]"
              src={blueLightMonster}
              id="blueMonsterImg"
              alt="Blue Monster"
            />
          </div>
          <div className="col-1 bobbyJonesSolidFont">
            <p className="text-center text-[400px] text-black">=</p>
          </div>
          <div className="col-4 ">
            <div className="row-10 justify-content-start">
              <input
                type="text"
                className="w-75"
                id="totalInput"
                value = {sumMsg}
                placeholder="0"/> 
          
               
              <div className="row-2 add2NumbersInputHeader mb-3 w-75 text-center">
                TOTAL
              </div>
            </div>
          </div>
          <div className="col-2 d-flex align-items-end">
            <a href="./menu.html">
              <img src={homeBtn} alt="Home Btn" />
            </a>
          </div>
        {/* </div> */}
      </div>
    </>
  );
};

export default AddTwoNumComponent;
