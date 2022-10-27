import React, { useContext } from "react";
import { themeContext } from "./App";

const Batman = () => {
  const useCont = useContext(themeContext);

  console.log(useCont);

  return (
    <>
      {useCont === "light" ? (
        <h1>Modo {useCont} </h1>
      ) : (
        <h1>Modo {useCont} </h1>
      )}
    </>
  );
};

export default Batman;