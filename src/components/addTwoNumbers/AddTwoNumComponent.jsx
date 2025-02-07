import blueLightMonster from "./bluelightMonster.png";
import homeBtn from "../../assets/HomeRightBtn.png";
import { addTwoNumService } from "../services/services";
import { useState } from "react";
import { Link } from "react-router-dom";

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
      <h2 className="bobbyJonesSolidFont text-center my-5 p-5 text-8xl text-[#3E8CAF]">ADD 2 NUMBERS</h2>
      <div className="flex p-5" id="add2NumbersContainer">
        <div className="w-2/3 text-center">
          <div className="add2NumbersInputHeader mb-3">1ST NUMBER</div>
          <input type="text " className="w-full h-40   text-center" id="firstNumInput"
           placeholder="0" 
           onChange={(e)=>setUserInput1(e.target.value)}/>
        </div>
        <div className="w-1/3">
          <div >
            <div className=" flex justify-center align-top h-40">
          <h1 className="text-[300px] text-black bobbyJonesSolidFont">
            +
          </h1>

            </div>
          </div>
        </div>
        <div className="w-2/3 text-center">
          <div className="add2NumbersInputHeader mb-3">2ND NUMBER</div>
        
            <input
              type="text"
              className="w-full h-40 text-center"
              id="secondNumInput"
              placeholder="0"
              onChange={(e)=>setUserInput2(e.target.value)}
            />
        
        </div>
      
      </div>

    
      <div className="flex mb-3 w-full justify-center ">
          <button id="add2NumbersSubmitBtn" onClick={SubmitBtn} className="w-1/2">
            SUBMIT
          </button>
        </div>
      <div className="flex overflow-hidden">
            <img
              className="-mb-[200px] ms-[-150px] w-[300px] "
              src={blueLightMonster}
              id="blueMonsterImg"
              alt="Blue Monster"
            />
    
            <p className="text-[400px] bobbyJonesSolidFont text-black">=</p>
       
            {/* total section */}
              <div className=" flex flex-col  items-center justify-end mb-5">
              <input
                type="text"
                className="w-75 mb-4 text-center"
                id="totalInput"
                value = {sumMsg}
                placeholder="0"/>
               
              <p className=" add2NumbersInputHeader mb-3 w-full text-center">
                TOTAL </p>
              </div>
        
        {/* home btn */}
          <div className=" flex  flex-col  justify-end p-5 mb-5">
          <Link to='/' className="content-end ">
          <img className="object-contain " src={homeBtn} alt="Home Btn" />
          </Link>
           
          </div>
        
      </div>
    </>
  );
};

export default AddTwoNumComponent;
