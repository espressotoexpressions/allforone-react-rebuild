
import { sayHelloService } from "../services/services.js";
import { useState } from "react";
import yellowMonster from "./yellowMonster.png";  
import homeBtn from "../../assets/HomeRightBtn.png";
import { Link } from "react-router-dom";

const SayHelloComponent =()=>{
const [userInput,setUserInput] =useState('');
const [helloMsg, setHelloMsg] =useState('');


const SubmitBtn = async()=>{
              
            console.log("ENTER EVENT");
            // let name = nameInput.value;
            
            console.log(userInput);

            setHelloMsg (await sayHelloService(userInput));
            console.log("HELLO MSG"+ helloMsg);
          
        }
   
    return (
       <>
      

  <h1 className="bobbyJonesSolidFont font-extrabold text-8xl p-10 text-amber-800">SAY HELLO</h1>

      <div className="flex  p-10">
        <h2 className="bobbyJonesSolidFont text-6xl content-center  text-amber-800">NAME:</h2>
        <input
          type="text"
          className=" mx-4"
          id="nameInput"
          aria-describedby="Name Input"
          onChange={(e)=>setUserInput(e.target.value)}
        />

        <button onClick={SubmitBtn} className="btn w-1/4 bobbyJonesSolidFont" id="btnSayHello">
          <p>Submit</p>
        </button>
        
        
      </div>
      <div className="p-10 text-center text-6xl">
        {
          userInput.length !=0  ?  <h1  className=" text-amber-800">{helloMsg} </h1>
          :
          <h2  className=" text-amber-800">Please enter your Name </h2>
        } 
        
        </div> 
      

      <div className="flex justify-center p-10 ">
   
          <img src={yellowMonster} className=" max-h-screen" alt="Yellow Monster Image" />
     
    
          <Link to='/' className="content-end ">
            <img className="h-[10em]"
              src={homeBtn}
              id="homeBtn"
              alt="Home Button" 
            />
          </Link>
      </div>
  
       </>
       
        
    )
};

export default SayHelloComponent