import React from "react";
import { useGlobalContext } from "../hooks/context";
import Loading from "./Loading";
import { Link } from "react-router-dom";


const MealList = () => {
  const { isLoading, meals } = useGlobalContext();

  //loading state
  if (isLoading) {
    return <Loading />;
  }
  //if there is no food
  if (meals.length < 1) {
    return <h1 className="my-3 text-success display-4">No Food Found</h1>;
  }
  
  return (
   <div className="container d-flex flex-wrap justify-content-between align-items-center">
    {meals.map((meal) => {
        const { id, image, cat, name } = meal;
        return (
          <Link 
           key={id} 
           to={`/meal/${id}`} 
           className="text-decoration-none my-3 mx-auto"
          >
        <div 
          className="shadow shadow-lg rounded-2 "
          style={{ width: "280px" }}
        >
          <img src={image} alt={name} className="w-100 rounded-top-2" />
          <h4 className="text-center text-success fw-bold mt-2"> {name} </h4>
          <h4 className="text-center text-secondary fw-light"> {cat} </h4>
        </div>
        </Link>
      );
    })}
  </div>
  );
};

export default MealList;