import tealMonster from "./tealMonster.png"
import homeBtn from "../../assets/HomeLeftBtn.png";
import { Link } from "react-router-dom";
import { reverseNumService } from "../services/services";
import { useState } from "react";
const ReverseItNumComponent =() => {
    const [userInput,setUserInput] =useState('');
    const [reverseMsg, setReverseMsg] =useState('');

    const submitBtn = async()=>{
        setReverseMsg(await  reverseNumService(userInput));
    }
    return (
            
<div id="reverseNumContainer" className=" p-10 flex gap-4">
  
        {/* <!-- left images--> */}
        <div className="h-full grid grid-rows-2">
            <div className="">
                <img src={tealMonster}
                 className="mt-[-100px] ms-[100px]" 
                 id="tealMonsterImg" alt="Teal Monster" />
            </div>
            <div className="flex justify-center items-center flex-grow">
             
            <Link to='/' className="">
            <img className="h-[5em] "
              src={homeBtn}
              id="homeBtn"
              alt="Home Button" 
            />
          </Link>
              
            </div>
        </div>

        
        {/* <!--right input/output section--> */}
        <div className="gap-4 w-3/4">
            <h2 className="bobbyJonesOutlineFont text-center text-8xl">REVERSE NUMBER</h2>
            <div className="text-6xl m-5">
                <h3 className=""> ENTER NUMBER TO REVERSE</h3>
                <textarea  className="p-10 w-full" id="reverseNumInput" rows="3" onChange={(e)=>setUserInput(e.target.value)}/>
                <div className="flex justify-center my-5 "> <button id="reverseNumSubmitBtn" onClick ={submitBtn}className="w-1/2">  SUBMIT</button></div>
            </div>
            <div className="text-6xl h-auto ">
                <h3> YOUR REVERSED NUMBER</h3>
                <textarea  className="w-full p-10 h-auto form-control" id="reverseNumOutput" value={reverseMsg} rows="3" ></textarea>
                
            </div>
            
        </div>
    
</div>

)

}

export default ReverseItNumComponent