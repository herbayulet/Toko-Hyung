import React from "react";
import { ApiCategories } from "../API/CategoryApi";
import Category from "./Category";

function Categories() {
  return (
    <div className="flex justify-between items-center p-5">
      {ApiCategories.map((category, i) => {
        return <Category item={category} key={i} />;
      })}
    </div>
  );
}

export default Categories;
