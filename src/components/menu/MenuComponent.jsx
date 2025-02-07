import { Button } from "flowbite-react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import SayHelloBtn from "../../assets/SayHelloBtn.png";
import OddOrEvenBtn from "../../assets/OddOrEvenBtn.png";
import Add2NumbersBtn from "../../assets/Add2NumBtn.png";
import ReverseItNumBtn from "../../assets/ReverseItNumBtn.png";
import AskingQBtn from "../../assets/AskingQBtn.png";
import ReverseItStrBtn from "../../assets/ReverseItStrBtn.png";
import GreaterLessBtn from "../../assets/GreaterLessBtn.png";
import Magic8BallBtn from "../../assets/Magic8BallBtn.png";
import MadlibsBtn from "../../assets/madlibsBtn.png";
import RestaurantPickerBtn from "../../assets/RestaurantPickerBtn.png";

const MenuComponent = () => {
  return (
    <>
      <h1 className="text-center p-10 text-8xl bobbyJonesOutlineFont"> MENU</h1>
      <div className="grid grid-cols-2 gap-1 place-items-center">
        <Link to="/say-hello">
          <button>
            <img src={SayHelloBtn} alt="Say hello Button" />
          </button>
        </Link>
        <Link to="/odd-or-even">
          <button>
            <img src={OddOrEvenBtn} alt="Odd Or EvenButton" />
          </button>
        </Link>
        <Link to="/add-two-num">
          <button>
            <img src={Add2NumbersBtn} alt="Add 2 Numbers Button" />
          </button>
        </Link>
        <Link to="/reverse-it-num">
          <button>
            <img src={ReverseItNumBtn} alt="Reverse It Button" />
          </button>
        </Link>
        <Link to="/ask-questions">
        <button>
                  <img src={AskingQBtn} alt="Ask Questions Button" />
                </button>
        </Link>
        <Link to="/reverse-it-str">
        <button>
                  <img src={ReverseItStrBtn} alt="Reverse It String Button" />
                </button>
        </Link>
        <Link to="/greater-less">
        <button>
                  <img src={GreaterLessBtn} alt="Greater or Less Than Button" />
                </button>
        </Link>
        <Link to="/magic-8-ball">
        <button>
                  <img src={Magic8BallBtn} alt="Magic 8 Ball Button" />
                </button>
        </Link>
        <Link to="/madlibs">
        <button>
                  <img src={MadlibsBtn} alt="MadLibs Button" />
                </button>
        </Link>
        <Link to="/restaurant-picker">
        <button>
                  <img src={RestaurantPickerBtn} alt="Restaurant Picker Button" />
                </button>
        </Link>
      </div>
    </>
  );
};
export default MenuComponent;
