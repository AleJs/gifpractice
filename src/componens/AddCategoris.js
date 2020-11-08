import React, { useState } from "react";
import "./GifGriditems.css";
import PropTypes from "prop-types";
function AddCategoris({ setCategories }) {
  const [inputValue, setInputValue] = useState("hola mundo");
  const newInput = (e) => {
    setInputValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length > 2) {
      setCategories((cats) => [inputValue, ...cats]);
      setInputValue("");
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" value={inputValue} onChange={newInput} />
      </form>
    </>
  );
}
export default AddCategoris;

AddCategoris.propTypes = {
  setCategories: PropTypes.func.isRequired,
};
