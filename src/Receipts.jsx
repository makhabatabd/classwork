import React, { useState } from "react";

const Receipts = ({ meal, setMeal }) => {
  return (
    <div style={{ marginTop: "30px" }}>
      <div>
        <input
          type="radio"
          value="soup"
          name="food"
          onClick={(e) => setMeal(e.target.value)}
          id="soup"
        />
        <label htmlFor="soup"> Soup</label>
      </div>
      <div>
        <input
          type="radio"
          name="food"
          value="salad"
          onChange={(e) => setMeal(e.target.value)}
          id="salad"
        />
        <label htmlFor="salad">Salad</label>
      </div>
      <div>
        <input
          type="radio"
          name="food"
          value="meatloaf"
          onChange={(e) => setMeal(e.target.value)}
          id="meatloaf"
        />
        <label htmlFor="meatloaf">Meatloaf</label>
      </div>
      <div>
        <input
          type="radio"
          name="food"
          value="cheesecake"
          onChange={(e) => setMeal(e.target.value)}
          id="cheesecake"
        />
        <label htmlFor="cheesecake">CheeseCake</label>
      </div>
    </div>
  );
};

export default Receipts;
