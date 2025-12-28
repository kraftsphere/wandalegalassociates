import React from "react";
import Details from "./Details";
import Form from "./Form";

const DetailAndForm = () => {
  return (
    <div className="bg-white">
      <div className="s_wrapper flex flex-col md:flex-row justify-between gap-8">
        <Details />
        <Form />
      </div>
    </div>
  );
};

export default DetailAndForm;
