import React from "react";
import { RotatingLines } from "react-loader-spinner";

const Loading = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
        <RotatingLines
            strokeColor="green"
            strokeWidth="3"
            animationDuration="1"
            width="200"
            visible={true}
        />
    </div>
  );
};

export default Loading;