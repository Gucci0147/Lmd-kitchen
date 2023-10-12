import React from "react";
import { useGlobalContext } from "../hooks/context";
import { useRef } from "react";

const Searchform = () => {
  const { setSearchValue } = useGlobalContext();
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const inputContainer = useRef();
  const searchMeal = () => {
    setSearchValue(inputContainer.current.value);
  };

  return (
    <div>
      <div className="my-2">
        <form className="w-50 mx-auto">
          <label
            htmlFor="meal"
            className="text-success text-center w-100 form-label fw-bold fs-4"
          >
            Search for Your Favorite Meal
          </label>
          <input 
            type="text" 
            className="form-control w-100 border border-success shadow-none"
            ref={inputContainer}
            onChange={searchMeal}
          />
        </form>
      </div>
      </div>
  );
};

export default Searchform;