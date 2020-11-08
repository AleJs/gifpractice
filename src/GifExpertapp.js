import React, { useState } from "react";
import AddCategoris from "./componens/AddCategoris";
import GifGrid from "./componens/GifGrid";
import "./componens/GifGriditems.css";

function GifExpertapp() {
  const [categories, setCategories] = useState(["universe"]);
  //   const handleAdd = () => {
  //     setCategories(["heidi", ...categories]);
  //   };

  return (
    <>
      <h2 className="title">GIF API</h2>
      <AddCategoris setCategories={setCategories} />
      <hr />
      {/* <button onClick={handleAdd}>Agregar</button> */}
      <ol>
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </ol>
    </>
  );
}

export default GifExpertapp;
