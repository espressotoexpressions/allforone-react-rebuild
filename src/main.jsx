import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MenuComponent from "./components/menu/MenuComponent.jsx";
import SayHelloComponent from "./components/sayhello/SayHelloComponent.jsx"
import AddTwoNumComponent  from "./components/addTwoNumbers/AddTwoNumComponent.jsx";
import OddEvencomponent from "./components/oddOrEven/OddEvenComponent.jsx"
import ReverseItNumComponent from "./components/reversItNum/ReverseItNumComponent";
import AskQuestionsComponent from "./components/askQuestions/AskQuestionsComponent.jsx";
import ReversetItStrComponent from "./components/reverseItStr/ReverseItStrComponent.jsx";
import GreaterLessComponent from "./components/greaterLess/GreaterLessComponent.jsx";
import Magic8BallComponent from "./components/magic8Ball/Magic8BallComponent.jsx"
import MadlibsComponent from "./components/madlibs/MadlibsComponent.jsx";
import RestaurantPickerComponent from "./components/restaurantPicker/RestaurantPickerComponent.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<MenuComponent />} />
        <Route path="/say-hello" element={<SayHelloComponent />} />
        <Route path="/add-two-num" element={<AddTwoNumComponent />} />
        <Route path="/odd-or-even" element={<OddEvencomponent />} />
        <Route path="/reverse-it-num" element={<ReverseItNumComponent />} />
        <Route path="/ask-questions" element ={<AskQuestionsComponent/>} />
        <Route path="/reverse-it-str" element={<ReversetItStrComponent/>} />
        <Route path="/greater-less" element={<GreaterLessComponent/>} />
        <Route path="/magic-8-ball" element={<Magic8BallComponent/>} />
        <Route path="/madlibs" element={<MadlibsComponent/>} />
        <Route path="/restaurant-picker" element={<RestaurantPickerComponent/>} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
