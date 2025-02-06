import blueLightMonster from "../../assets/bluelightMonster.png";
import homeBtn from "../../assets/HomeRightBtn.png";

const AddTwoNumComponent =()=>{
    console.log("ENTER ADD TWO NUM")
    return (
        <>
   <div className="" id="add2NumbersContainer">
      <h2 className="bobbyJonesSolidFont text-center my-5">ADD 2 NUMBERS</h2>
      <div className="flex">
        <div className="flex-col text-center">
          <div className="add2NumbersInputHeader mb-3">1ST NUMBER</div>
          <div className="">
            <input
              type="text"
              className=""
              id="firstNumInput"
              placeholder="0"
            />
          </div>
        </div>
        <div className="flex-col">
          <div className=""></div>
          <div
            className="row-10 flex- bobbyJonesSolidFont justify-content-center align-items-center"
          >
            <h1 className="text-[300px] text-black">+</h1>
          </div>
        </div>
        <div className="col-5">
          <div className="row-2 add2NumbersInputHeader text-center mb-3">
            2ND NUMBER
          </div>
          <div className="row-10">
            <input
              type="text"
              className="w-100"
              id="secondNumInput"
              placeholder="0"
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div  className=" text-center mb-3 " >
            <button id="add2NumbersSubmitBtn" className="w-100">
                SUBMIT

            </button>
        </div>
      </div>
    </div>
    <div className="container-fluid">
      <div className="row" >
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
            <input type="text" className="w-75" id="totalInput" placeholder="0" />
          <div className="row-2 add2NumbersInputHeader mb-3 w-75 text-center">TOTAL</div>
          
          </div>
        </div>
        <div className="col-2 d-flex align-items-end">
          <a href="./menu.html">
            <img src={homeBtn} alt="Home Btn" />
          </a>
        </div>
      </div>
    </div>
    </>
       
    )
}

export default AddTwoNumComponent