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
    <div className="vh-100" id="restaurantPickerContainer">
      <div className="flex h-100 grid-cols-12">
        {/* <!-- left images--> */}
        <div className="col-span-4 ">
          <div className="">
            <img
              src={lighBlueMonster}
               className="mt-[-200px] ms-[-250px]"
              id="lightBlueMonster"
              alt="Light Blue Monster"
            />
          </div>
          <div className=" mt-auto mb-5 pb-5 d-flex justify-content-center">
          <Link to='/' classNameName="content-end ">
            <img classNameName="h-[10em]"
              src={homeBtn}
              id="homeBtn"
              alt="Home Button" 
            />
          </Link>
          </div>
        </div>

        {/* <!--right input/output section--> */}
        <div className="col-span-8  gap-4 m-auto">
          <div className="justify-content-center">
            <h3
              className="bobbyJonesSolidFont w-full text-center"
              
            >
              WHAT CUISINE WOULD YOU LIKE TO HAVE FOR TODAY?
            </h3>
          </div>

          <div className="row justify-content-around text-center gap-3">
            <div className="d-flex justify-content-around ">
              <button id="chineseBtn" className="w-25"  onClick={SubmitChineseBtn}>
                {" "}
                CHINESE
              </button>
              <button id="italianBtn" className="w-25"  onClick={SubmitItalianBtn}>
                {" "}
                ITALIAN
              </button>
            </div>
            <div className="row-6 d-flex justify-content-around mb-3">
              <button id="filipinoBtn" className="w-25"  onClick={SubmitFilipinoBtn}>
                {" "}
                FILIPINO
              </button>
              <button id="anyBtn" className="w-25" onClick={SubmitAnyBtn}>
                {" "}
                ANY
              </button>
            </div>

            <div className="row  ">
              <h3> MY RESTAURANT SUGGESTION FOR YOU</h3>
              <textarea
                className="w-100 form-control"
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
