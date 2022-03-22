import React from "react";

const Ingredients = ({ meal }) => {
  console.log(meal);
  return (
    <div>
      {meal === "soup" ? (
        <>
          <div>
            <ol
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
              }}
            >
              <li>Onions</li>
              <li>Carrots</li>
              <li>Water</li>
              <li>Meat</li>
            </ol>
          </div>
        </>
      ) : null}
      {meal === "salad" ? (
        <>
          <div>
            <ol
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
              }}
            >
              <li>Cabbage</li>
              <li>Lettuce</li>
              <li>Cucumbers</li>
              <li>Onions</li>
            </ol>
          </div>
        </>
      ) : null}
      {meal === "meatloaf" ? (
        <>
          <div>
            <ol
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
              }}
            >
              <li>Meat</li>
              <li>Salt</li>
              <li>Water</li>
              <li>Onions</li>
            </ol>
          </div>
        </>
      ) : null}
      {meal === "cheesecake" ? (
        <>
          <div>
            <ol
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
              }}
            >
              <li>Cheese</li>
              <li>Flour</li>
              <li>Water</li>
              <li>Sugar</li>
            </ol>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default Ingredients;
