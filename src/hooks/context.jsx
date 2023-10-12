import { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext();
export const useGlobalContext = () => useContext(AppContext);

const AppProvider = ({ children }) => {
    const [isLoading, SetIsLoading] = useState(true);
    const [meals, setMeals] = useState(null);
    const [searchValue, setSearchValue] = useState("");
    const url = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
    
    //fetching data from api
    const fetchData = async () => {
        SetIsLoading(true);
        const res = await fetch(`${url}${searchValue}`); 
        const data = await res.json();
        const { meals } = data;
        if (meals) {
          //get those meals
          const newFoods = meals.map((item) => {
            return {
                id: item.idMeal,
                name: item.strMeal,
                image: item.strMealThumb,
                cat: item.strCategory,
            };
          });
          setMeals(newFoods);
        } else {
          setMeals([]);  
        }
        SetIsLoading(false);
    };
    useEffect(() => {
        fetchData();
    }, [searchValue]);

    return (
        <AppContext.Provider 
            value={{ isLoading, meals, searchValue, setSearchValue }}
        > 
            {children}
        </AppContext.Provider>
    );
};

export default AppProvider;