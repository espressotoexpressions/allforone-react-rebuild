import darkGreenMonster from "./darkGreenMonster.png";
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
          <div className="flex" id="madgic8BallContainer">
      <div className="flex vh-100">
        {/* <!-- left images--> */}

        <div className="col-4 d-flex flex-column">
          <div >
            <img
            //   style="margin-left: -200px; margin-top: 150px;"
              src={darkGreenMonster}              id="darkGreenMonsterImg"
              alt="Dark Green  Monster"
            />
          </div>
          <div className="row-6 mt-auto mb-5 pb-5">
          <Link to='/' className="content-end ">
            <img className="h-[10em]"
              src={homeBtn}
              id="homeBtn"
              alt="Home Button" 
            />
          </Link>
          </div>
        </div>

        {/* <!--right input/output section--> */}
        <div className="col-8 p-5">
          <h2 className="bobbyJonesOutlineFont text-center">MAGIC 8 BALL</h2>
          <div className="row">
            <h3  className="text-3xl">ENTER YOUR QUESTION FOR ME</h3>
            <textarea
              className="w-100 form-control"
              id="magic8BallInput"
              rows="3"
              onChange={(e)=>{setUserInput(e.target.value)}}
            
            ></textarea>
            <div className="row justify-content-center my-5">
              <button id="magic8BallSubmitBtn" onClick={SubmitBtn} className="w-50">SUBMIT</button>
            </div>
          </div>
          <div className="row">
            <h3>I THINK...</h3>
            <textarea
              className="w-100 form-control"
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