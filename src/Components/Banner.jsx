import React from "react"; 


const Banner = () => {
  return (
    <div className="container-fluid banner d-flex justify-content-center justify-content-md-start align-items-center">
        <div className="text-start">
            <p className="display-4 text-success">Healthy Meal Options</p>
            <h1 className="text-dark fw-light">Explore Different Meals</h1>
            <button className="btn btn-success">See More Below</button>
    </div>
 </div>
  );
};

export default Banner;