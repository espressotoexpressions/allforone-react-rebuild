import { Button } from "flowbite-react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
const MenuComponent=()=>{
    return (
      <> 
        <h1 className="text-center p-10"> MENU</h1>
        <div className="grid grid-cols-2 gap-4 place-items-center p-10">
        <Link to='/say-hello'><Button> Say Hello</Button></Link>
        <Link to='/odd-or-even'> <Button color="blue">Odd Or Even</Button></Link>
        <Link to='/add-two-num'> <Button color="blue">Add Two Numbers</Button></Link>
        <Link to='/reverse-it-num'> <Button color="blue">Reverse It -Number</Button></Link>
        <Link to='/ask-questions'> <Button color="blue">Asking Questions</Button></Link>
        <Link to='/reverse-it-str'> <Button color="blue">Reverse It-String</Button></Link>
        <Link to='/greater-less'> <Button color="blue"> Greater Than Or Less THan</Button></Link>
        <Link to='/magic-8-ball'> <Button color="blue">Magic 8 Ball</Button></Link>
        <Link to='/mad-libs'> <Button color="blue">Madlibs</Button></Link>
        <Link to='/restaurant-picker'> <Button color="blue">Restaurant Picker</Button></Link>
        </div>
      </>
      
    )
};
export default MenuComponent