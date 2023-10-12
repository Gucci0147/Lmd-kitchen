import React, { useState, useEffect } from "react";
//getting access to the route parameter
import { useParams } from "react-router-dom";
import Loading from "../Components/Loading";
import ReactPlayer from "react-player/youtube";

const Singlemeal = () => {
  const { mealId } = useParams();
  const url = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=";
  const finalUrl = url + mealId;
  const [loading, setLoading] = useState(true);
  const [meal, setMeal] = useState(null);

  const fetchMeal = async () => {
    setLoading(true);
    const res = await fetch(`${url}${mealId}`);
    const data = await res.json();
    console.log(data.meals);
    if (data.meals) {
      //do sth
      const {
        strMeal: name, 
        strCategory: cat, 
        strTags: tags, 
        strArea: area, 
        strInstructions: instructions, 
        strMealThumb: image, 
        strYoutube: youtube,
      } = data.meals[0];
      const newMeal = { name, cat, tags, area, instructions, image, youtube };
      setMeal(newMeal);
    } else {
      setMeal(null);
    }
    setLoading(false);
  };
  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    fetchMeal(); 
  }, [mealId]);

  if (loading) {
    return <Loading />;
  }
  
  if (!meal) {
    return (
      <h1 className="text-center text-success my-4">No meal to Display</h1>
    );
  }

  return (
    <div className="container mt-2">
      <div>
      <img 
        src={meal.image} 
        alt={meal.name}
        className="w-100 object-fit-cover"
        style={{ height: "400px" }} 
      />
      <div className="my-3">
        <p>
          <span className="bg-success rounded-2 p-2 text-white me-2">
            Name :
          </span>
          {meal.name}
        </p>
        <p>
          <span className="bg-success rounded-2 p-2 text-white me-2">
            Area :
          </span>
          {meal.area}
        </p>
        <p>
          <span className="bg-success rounded-2 p-2 text-white me-2">
            Tags :
          </span>
          {meal.tags}
        </p>
        <p>
          <span className="bg-success rounded-2 p-2 text-white me-2">
            Categories :
          </span>
          {meal.cat}
        </p>
        <p className="lh-lg">
          <span className="bg-success rounded-2 p-2 text-white me-2">
            Instructions :
          </span>
          {meal.instructions}
        </p>
        <p className="lh-lg">
          <span className="bg-success rounded-2 p-2 text-white me-2">
            Video Instructions :
          </span>
        </p>
      <ReactPlayer 
         url={meal.youtube} 
         controls={true} 
         playing={false} 
         muted={true} 
         width={"100%"} 
         height={"450px"} 
      />
      </div>
    </div>
  </div>

  );
};

export default Singlemeal;