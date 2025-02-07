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
        setMadlibMsg(await madlibsService(noun1,adjective2,number3,noun4,noun5,adjective6, noun7,number8,number9, adjective10,adverb11,noun12))
    }
  return (
    <>
      <div ClassName="" id="madlibsContainer">
        <div ClassName="">
          {/* <div ClassName="col-4 d-flex flex-column justify-content-center"> */}
            <h2 ClassName="bobbyJonesOutlineFont">MADLIBS</h2>
          {/* </div> */}
          <div ClassName="col-8">
            <img
              ClassNameName="mt-[-250px]"
              src={orangeMonster}
              alt="Orange Monster"
            />
          </div>
        </div>

        {/* <!--middle container --> */}
        <div ClassName="flex" id="madlibsInputGrp" 
        ClassNameName="mt-[-100px]"
        >
          {/* <!--left column--> */}
          <div ClassName="flex-col" id="madlibLeftCol">
            <div ClassName="flex">
              <div ClassName="col-4">
                <p>TEACHER'S NAME</p>
              </div>
              <div ClassName="col-8">
                <input type="text" ClassName="w-100" id="noun1Input" onChange={(e)=>setNoun1(e.target.value)} />
              </div>
            </div>
            <div ClassName="flex">
              <div ClassName="col-4">
                <p>Adjective</p>
              </div>
              <div ClassName="col-8">
                <input type="text" ClassName="w-100" id="adjective2Input" onChange={(e)=>setAdjective2(e.target.value)}/>
              </div>
            </div>
            <div ClassName="flex">
              <div ClassName="col-4">
                <p>Number</p>
              </div>
              <div ClassName="col-8">
                <input type="text" ClassName="w-100" id="number3Input" onChange={(e)=>setNumber3(e.target.value)}/>
              </div>
            </div>
            <div ClassName="flex">
              <div ClassName="col-4">
                <p>Animals</p>
              </div>
              <div ClassName="col-8">
                <input type="text" ClassName="w-100" id="noun4Input"  onChange={(e)=>setNoun4(e.target.value)}/>
              </div>
            </div>
            <div ClassName="flex">
              <div ClassName="col-4">
                <p>Liquid</p>
              </div>
              <div ClassName="col-8">
                <input type="text" ClassName="" id="noun5Input" onChange={(e)=>setNoun5(e.target.value)} />
              </div>
            </div>
            <div ClassName="flex">
              <div ClassName="col-4">
                <p>Adjective</p>
              </div>
              <div ClassName="col-8">
                <input type="text" ClassName="" id="adjective6Input" onChange={(e)=>setAdjective6(e.target.value)} />
              </div>
            </div>
          </div>
          {/* <!--right column--> */}
          <div ClassName="flex-col" id="madlibRightCol">
            <div ClassName="flex">
              <div ClassName="col-4">
                <p>Noun</p>
              </div>
              <div ClassName="col-8">
                <input type="text" ClassName="w-100" id="noun7Input" onChange={(e)=>setNoun7(e.target.value)} />
              </div>
            </div>
            <div ClassName="flex">
              <div ClassName="col-4">
                <p>Number</p>
              </div>
              <div ClassName="col-8">
                <input type="text" ClassName="w-100" id="number8Input"  onChange={(e)=>setNumber8(e.target.value)}/>
              </div>
            </div>
            <div ClassName="flex">
              <div ClassName="col-4">
                <p>Another Number</p>
              </div>
              <div ClassName="col-8">
                <input type="text" ClassName="w-100" id="number9Input" onChange={(e)=>setNumber9(e.target.value)} />
              </div>
            </div>
            <div ClassName="flex">
              <div ClassName="col-4">
                <p>Adjective</p>
              </div>
              <div ClassName="col-8">
                <input type="text" ClassName="w-100" id="adjective10Input" onChange={(e)=>setAdjective10(e.target.value)}/>
              </div>
            </div>
            <div ClassName="flex">
              <div ClassName="col-4">
                <p>Adverb</p>
              </div>
              <div ClassName="col-8">
                <input type="text" ClassName="w-100" id="adverb11Input" onChange={(e)=>setAdverb11(e.target.value)}/>
              </div>
            </div>
            <div ClassName="flex">
              <div ClassName="col-4">
                <p>Your Name</p>
              </div>
              <div ClassName="col-8">
                <input type="text" ClassName="w-100" id="noun12Input" onChange={(e)=>setNoun12(e.target.value)}/>
              </div>
            </div>
          </div>
        </div>
        {/* <!--middle container for story--> */}

        <div ClassName="flex inactive" id="storyContainer">
          <div ClassName="col">
            <div ClassName="flex madlibsStoryheader text-center">
              <h3> THIS IS YOUR MADLIBS GENERATED STORY</h3>
            </div>
            <div ClassName="flex">
              <textarea
                readonly
                ClassName="w-100 form-control"
                id="madlibsOutput"
                flexs="4"
                value = {madlibMsg}
              ></textarea>
            </div>
          </div>
        </div>

        {/* <!--submit area--> */}
        <div ClassName="flex mt-5">
          <div ClassName="col-8 d-flex flex-column align-items-end">
            <button id="madlibsSubmitBtn" ClassName="w-50" onClick={SubmitBtn}>
              
              SUBMIT
            </button>
          </div>
          <div ClassName="col-4 d-flex flex-column align-items-end justify-content-center">
            <Link to="/" ClassNameName="content-end ">
              <img
                ClassNameName="h-[10em]"
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
