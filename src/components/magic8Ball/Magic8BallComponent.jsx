import darkGreenMonster from "./darkgreenMonster.png";
import homeBtn from "../../assets/HomeLeftBtn.png";
import { magic8BallService } from "../services/services";
import { useState } from "react";
import { Link } from "react-router-dom";

const Magic8BallComponent = ()=>{
    const [userInput, setUserInput]=useState('');
    const [eightBallMsg , setEightBallMsg]= useState('');

    const SubmitBtn = async()=>{
        setEightBallMsg(await magic8BallService(userInput));
    }
    return(
        <>
          <div className="flex flex-grow "  id="magic8BallContainer">
      <div className="flex  ">
        {/* <!-- left images--> */}

        <div className="">
          <div >
            <img
              className="-ms-[-80px] mt-[100px]" 
              src={darkGreenMonster}              id="darkGreenMonsterImg"
              alt="Dark Green  Monster"
            />
          </div>
          <div className="flex p-10  h-auto justify-center">
          <Link to='/' className="content-end ">
            <img className="h-[5em]"
              src={homeBtn}
              id="homeBtn"
              alt="Home Button" 
            />
          </Link>
          </div>
        </div>

        {/* <!--right input/output section--> */}
        <div className="col-8 p-5">
          <h2 className="bobbyJonesOutlineFont text-center text-8xl">MAGIC 8 BALL</h2>
          <div className="row">
            <h3  className="text-6xl">ENTER YOUR QUESTION FOR ME</h3>
            <textarea
              className="w-full"
              id="magic8BallInput"
              rows="3"
              onChange={(e)=>{setUserInput(e.target.value)}}
            
            ></textarea>
            <div className="text-center">
              <button className ="w-1/2" id="magic8BallSubmitBtn" onClick={SubmitBtn} >SUBMIT</button>
            </div>
          </div>
          <div className="">
            <h3 className="text-6xl">I THINK...</h3>
            <textarea
              className="w-full
               form-control"
              id="magic8BallOutput"
              rows="3"
              value ={eightBallMsg}
            ></textarea>
          </div>
        </div>
      </div>
    </div>
        </>
    )
}
export default Magic8BallComponent