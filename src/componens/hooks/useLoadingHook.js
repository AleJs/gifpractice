import { useState, useEffect } from "react";
import { getGifs } from "../Helpers/GetGif";

const useLoadingHook = (category) => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });
  useEffect(() => {
    getGifs(category).then((img) => {
      setState({ data: img, loading: false });
    });
  }, [category]);
  return state;
};

export default useLoadingHook;
