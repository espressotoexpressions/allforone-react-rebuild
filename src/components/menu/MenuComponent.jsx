import { Button } from "flowbite-react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
const MenuComponent=()=>{
    return (
        <div className="grid grid-cols-2 gap-4">
        <Link to='/say-hello'><Button> Say Hello</Button></Link>
        <Link to='/add-two-num'> <Button color="blue">Add Two Numbers</Button></Link>
        <NavLink to='/Game3'><Button color="gray">Game 3</Button></NavLink>
      <Button color="dark"><Link to='/Game4'>Game 4</Link></Button>
      <Button color="light"><Link to='/Game5'>Game 5</Link></Button>
      <Button color="success"><Link to='/Game6'>Game 6</Link></Button>
      <Button color="failure"><Link to='/Game7'>Game 7</Link></Button>
      <Button color="warning"><Link to='/Game8'>Game 8</Link></Button>
      <Button color="purple"> <Link to='/Game9'>Game 9</Link></Button>
      <Button color="warning"><Link to='/Game10'>Game 10</Link></Button>

        </div>
    )
};
export default MenuComponent