import React, { useState } from "react";

export const Ejercicio = () => {
  const fecha = new Date();
  let anyo = fecha.getFullYear();
  const [newYear, setNewYear] = useState(anyo);
  const sumarAnyo = e => {
    setNewYear(newYear+1);
  }
  const restarAnyo = e => {
    setNewYear(newYear-1);
  }    
  const cambiarAnyo = (year) => {
    setNewYear(year);    
  };  
  return (
    <>
      <div>Ejercicio Eventos y UseState
        <h3>Cambiar Fecha</h3>
        <strong>{newYear}</strong>
        <br />
        <button onClick={() => sumarAnyo()}>
          SUMA UN AÑO
        </button>
        <button onClick={() => restarAnyo(anyo - 1)}>
          RESTA UN AÑO
        </button>
        <br />
        <input
          type="number"          
          onChange={(e) => cambiarAnyo(parseInt(e.target.value))}
          placeholder="Cambia el Año"
        ></input>
      </div>
    </>
  );
};
