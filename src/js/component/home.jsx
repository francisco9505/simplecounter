import React, { useState } from "react";

const Home = () => {
  const [valor, setValor] = useState(0);

  const siguiente = () => {
    setValor(valor + 1);
  };

  setInterval(siguiente, 1000);

  return (
    <>
      <div style={{ justifyContent: "center" , display:'flex',backgroundColor:'red'}}>
        <h1 style={{fontSize:'100px'}}>{valor}</h1>
      </div>
    </>
  );
};

export default Home;
