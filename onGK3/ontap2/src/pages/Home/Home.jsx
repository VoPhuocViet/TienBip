import React from "react";
import data from "../../data/data.json";
import FoodBox from "../../components/FoodBox/FoodBox";

export default function Home() {
  return (
    <div className="" style={{ padding: "50px 180px" }}>
      <div className="row justify-content-center">
        {data.slice(0, 8).map((food) => (
          <div key={food.id} className="col-md-3 mb-3">
            <FoodBox product={food} />
          </div>
        ))}
      </div>
    </div>
  );
}
