import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MenuComponent from "./components/menu/MenuComponent.jsx";
import SayHelloComponent from "./components/sayhello/SayHelloComponent.jsx"
import AddTwoNumComponent  from "./components/addTwoNumbers/AddTwoNumComponent.jsx";
import OddEvencomponent from "./components/oddOrEven/OddEvenComponent.jsx"
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<MenuComponent />} />
        <Route path="/say-hello" element={<SayHelloComponent />} />
        <Route path="/add-two-num" element={<AddTwoNumComponent />} />
        <Route path="/odd-or-even" element={<OddEvencomponent />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
