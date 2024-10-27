import { useState } from "react";

const RegistrarEquipo = () => {
  const [nombre, setNombre] = useState("");

  const handleChange = (e) => {
    setNombre(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Nombre del equipo:", nombre);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nombre del equipo:
        <input type="text" value={nombre} onChange={handleChange} />
      </label>
      <button type="submit">Registrar equipo</button>
    </form>
  );
};

export default RegistrarEquipo;
