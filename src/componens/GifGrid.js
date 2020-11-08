import React from "react";
import GifGriditems from "./GifGriditems";
import "./GifGriditems.css";
import useLoadingHook from "./hooks/useLoadingHook";
const GifGrid = ({ category }) => {
  const { data, loading } = useLoadingHook(category);

  return (
    <>
      <h1> {category}</h1>

      {loading && <h1>Loading..</h1>}
      <div>
        <ol className="list ">
          {data.map((img) => (
            <GifGriditems {...img} key={img.id}></GifGriditems>
          ))}
        </ol>
      </div>
    </>
  );
};

export default GifGrid;
