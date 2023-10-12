import React from "react";
import Banner from "../Components/Banner";
import Searchform from "../Components/Searchform";
import MealList from "../Components/MealList";

const Home = () => {
  return (
    <div>
     <Banner />
     <Searchform />
     <MealList />
    </div>

  )
};

export default Home;