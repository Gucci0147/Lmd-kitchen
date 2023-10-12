import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
  <div className="container-md">
    <img 
        src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-1881.jpg?size=626&ext=jpg&ga=GA1.2.67547786.1689536837&semt=ais" 
        alt="error"
        className="img-fluid d-block mx-auto" 
    />

      <Link to="/" className="text-decoration-none">
        <button className="btn btn-success d-block my-1 mx-auto">
          Go Back to Homepage
        </button>
      </Link>
  
  </div>
  );
};

export default Error;