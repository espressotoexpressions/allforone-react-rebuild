import { Card } from "flowbite-react";



const CardComponent = () => {
    const myName = "Karen";
    
    return (
    <div className="flex justify-center">
      <Card  className="w-[25rem]">
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {myName}'s card
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Welcome to react!
        </p>
      </Card>
    </div>
  );
};

export default CardComponent;
