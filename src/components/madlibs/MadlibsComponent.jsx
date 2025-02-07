import { madlibsService } from "../services/services";
import { useState } from "react";
import orangeMonster from "./orangeMonster.png";
import homeBtn from "../../assets/HomeRightBtn.png";
import { Link } from "react-router-dom";
const MadlibsComponent = () => {

    
    const [noun1,setNoun1] = useState('');
    const [adjective2,setAdjective2] = useState('');
    const [number3,setNumber3] = useState('');
    const [noun4,setNoun4]= useState('');
    const [noun5,setNoun5]= useState(''); 
    const [adjective6,setAdjective6] = useState(''); 
    const [noun7,setNoun7] = useState('');
    const [number8, setNumber8]= useState('');
    const [number9,setNumber9]= useState(''); 
    const [adjective10,setAdjective10]= useState(''); 
    const [adverb11,setAdverb11]= useState('');
    const [noun12,setNoun12]= useState(''); 
    const [madlibMsg, setMadlibMsg] = useState('');

    const SubmitBtn =async()=>{
        let madlibsInputGrp = document.getElementById("madlibsInputGrp");
        let storyContainer =document.getElementById("storyContainer");
        let madlibsSubmitBtn=document.getElementById("madlibsSubmitBtn");

        setMadlibMsg(await madlibsService(noun1,adjective2,number3,noun4,noun5,adjective6, noun7,number8,number9, adjective10,adverb11,noun12))
        console.log(madlibMsg);
        madlibsInputGrp.classList.add("inactive");
        storyContainer.classList.remove("inactive");
        madlibsSubmitBtn.classList.add("inactive");
    }
  return (
    <>
      <div className="p-10" id="madlibsContainer">
        <div className=" flex">
            <h2 className="bobbyJonesOutlineFont text-8xl">MADLIBS</h2>
         
          <div className="">
            <img
              className="mt-[-250px] ms-[200px]"
              src={orangeMonster}
              alt="Orange Monster"
            />
          </div>
        </div>

        {/* <!--middle container --> */}
        <div id="madlibsInputGrp" 
        className="mt-[-100px] flex p-10 ms-10"
        >
          {/* <!--left column--> */}
          <div className="flex flex-col gap-4" id="madlibLeftCol">
            <div className="flex">
              <div className="w-1/3">
                <p>TEACHER'S NAME</p>
              </div>
              <div className="w-1/2">
                <input type="text" className="w-100" id="noun1Input" onChange={(e)=>setNoun1(e.target.value)} />
              </div>
            </div>
            <div className="flex">
              <div className="w-1/3">
                <p>Adjective</p>
              </div>
              <div className="w-2/3">
                <input type="text" className="w-100" id="adjective2Input" onChange={(e)=>setAdjective2(e.target.value)}/>
              </div>
            </div>
            <div className="flex">
              <div className="w-1/3">
                <p>Number</p>
              </div>
              <div className="w-2/3">
                <input type="text" className="w-100" id="number3Input" onChange={(e)=>setNumber3(e.target.value)}/>
              </div>
            </div>
            <div className="flex">
              <div className="w-1/3">
                <p>Animals</p>
              </div>
              <div className="w-2/3">
                <input type="text" className="w-100" id="noun4Input"  onChange={(e)=>setNoun4(e.target.value)}/>
              </div>
            </div>
            <div className="flex">
              <div className="w-1/3">
                <p>Liquid</p>
              </div>
              <div className="w-2/3">
                <input type="text" className="" id="noun5Input" onChange={(e)=>setNoun5(e.target.value)} />
              </div>
            </div>
            <div className="flex">
              <div className="w-1/3">
                <p>Adjective</p>
              </div>
              <div className="w-2/3">
                <input type="text" className="" id="adjective6Input" onChange={(e)=>setAdjective6(e.target.value)} />
              </div>
            </div>
          </div>
          {/* <!--right column--> */}
          <div className="flex flex-col gap-4" id="madlibRightCol">
            <div className="flex">
              <div className="w-1/3">
                <p>Noun</p>
              </div>
              <div className="w-2/3">
                <input type="text" className="w-100" id="noun7Input" onChange={(e)=>setNoun7(e.target.value)} />
              </div>
            </div>
            <div className="flex">
              <div className="w-1/3">
                <p>Number</p>
              </div>
              <div className="w-2/3">
                <input type="text" className="w-100" id="number8Input"  onChange={(e)=>setNumber8(e.target.value)}/>
              </div>
            </div>
            <div className="flex">
              <div className="w-1/3">
                <p>Another Number</p>
              </div>
              <div className="w-2/3">
                <input type="text" className="w-100" id="number9Input" onChange={(e)=>setNumber9(e.target.value)} />
              </div>
            </div>
            <div className="flex">
              <div className="w-1/3">
                <p>Adjective</p>
              </div>
              <div className="w-2/3">
                <input type="text" className="w-100" id="adjective10Input" onChange={(e)=>setAdjective10(e.target.value)}/>
              </div>
            </div>
            <div className="flex">
              <div className="w-1/3">
                <p>Adverb</p>
              </div>
              <div className="w-2/3">
                <input type="text" className="w-100" id="adverb11Input" onChange={(e)=>setAdverb11(e.target.value)}/>
              </div>
            </div>
            <div className="flex">
              <div className="w-1/3">
                <p>Your Name</p>
              </div>
              <div className="w-2/3">
                <input type="text" className="w-100" id="noun12Input" onChange={(e)=>setNoun12(e.target.value)}/>
              </div>
            </div>
          </div>
        </div>
        {/* <!--middle container for story--> */}

        <div className="flex flex-col  inactive" id="storyContainer">
       
            <div className="flex  flex-grow madlibsStoryheader text-center">
              <h3 className="p-4"> THIS IS YOUR MADLIBS GENERATED STORY</h3>
            </div>
            <div className="flex">
              <textarea
                readonly
                className="w-full"
                id="madlibsOutput"
                rows="4"
                value = {madlibMsg}
              ></textarea>
            </div>
          </div>
     

        {/* <!--submit area--> */}
        <div className="flex mt-5 gap-4">
          <div className="w-2/3 flex items-end justify-end">
            <button id="madlibsSubmitBtn" className="w-1/3" onClick={SubmitBtn}>
              
              SUBMIT
            </button>
          </div>
          <div className="w-1/3 d-flex flex-column align-items-end justify-content-center">
            <Link to="/" className="content-end ">
              <img
                className="h-[5em]"
                src={homeBtn}
                id="homeBtn"
                alt="Home Button"
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default MadlibsComponent;
