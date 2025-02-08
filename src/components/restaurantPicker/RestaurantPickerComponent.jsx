import { restaurantPickerService } from "../services/services";
import { useState } from "react";
import lighBlueMonster from "./lightBlueMonster.png";
import homeBtn from "../../assets/HomeLeftBtn.png";
import { Link } from "react-router-dom";

const RestaurantPickerComponent = () => {
    const [restaurantName, setRestaurantName]=useState('');
    const SubmitAnyBtn =async()=>{
        setRestaurantName(await restaurantPickerService("any"));
    }
    const SubmitChineseBtn =async()=>{
        setRestaurantName(await restaurantPickerService("chinese"));
    }
    const SubmitItalianBtn =async()=>{
        setRestaurantName(await restaurantPickerService("italian"));
    }
    const SubmitFilipinoBtn =async()=>{
        setRestaurantName(await restaurantPickerService("filipino"));
    }
  return (
    <div className="" id="restaurantPickerContainer">
      <div className="flex flex-grow w-full">
        {/* <!-- left images--> */}
        <div className="w-1/3 ">
          <div className="">
            <img
              src={lighBlueMonster}
               className="mt-[-200px] ms-[-190px]"
              id="lightBlueMonster"
              alt="Light Blue Monster"
            />
          </div>
          <div className=" mt-auto mb-5 pb-5 d-flex justify-content-center">
          <Link to='/' classNameName="content-end ">
            <img classNameName="h-[5em]"
              src={homeBtn}
              id="homeBtn"
              alt="Home Button" 
            />
          </Link>
          </div>
        </div>

        {/* <!--right input/output section--> */}
        <div className="w-2/3 flex flex-col justify-center items-center gap-4 m-auto">
          {/* <div className="w-full"> */}
            <h3
              className="bobbyJonesSolidFont w-full text-6xl text-center"
              
            >
              WHAT CUISINE WOULD YOU LIKE TO HAVE FOR TODAY?
            </h3>
          {/* </div> */}

          <div className="flex flex-col items-center gap-3">
            <div className=" flex gap-4 ">
              <button id="chineseBtn" className="w-full"  onClick={SubmitChineseBtn}>
                CHINESE
              </button>
              <button id="italianBtn" className="w-full"  onClick={SubmitItalianBtn}>
                ITALIAN
              </button>
            </div>
            <div className="flex  gap-4">
              <button id="filipinoBtn" className="w-full"  onClick={SubmitFilipinoBtn}>
                FILIPINO
              </button>
              <button id="anyBtn" className="w-full" onClick={SubmitAnyBtn}>
                ANY
              </button>
            </div>

            <div className="row ">
              <h3 className ="text-6xl"> MY RESTAURANT SUGGESTION FOR YOU</h3>
              <textarea
                className="w-full "
                id="suggestionOutput"
                value={restaurantName}
              ></textarea>
            </div>
            <h1 className="bobbyJonesOutlineFont"> RESTAURANT PICKER</h1>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RestaurantPickerComponent;
