import React, { useState } from "react";

export const MiPrimerEstado = () => {
  const [nombre, setNombre] = useState("Tony Vargas");

  const cambiarNombre = (e, nombreFijo) => {
    setNombre(nombreFijo);
  };
  return (
    <div>
      <h3>Componente: Mi Primer Estado</h3>
      <strong>{nombre}</strong>
      <br />
      <button onClick={(e) => cambiarNombre(e, "Pepe")}>
        CAMBIAR NOMBRE POR PEPE
      </button>
      <br />
      <input
        type="text"
        onChange={(e) => cambiarNombre(e, e.target.value)}
        placeholder="Cambia el Nombre"
      ></input>
    </div>
  );
};
