import axios from "axios";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const RegistrarEquipo = () => {
  const [nombre, setNombre] = useState("");

  const handleChange = (e) => {
    setNombre(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Nombre del equipo:", nombre);

    try {
      const response = await axios.post(
        "https://eval2do-parcial-servicio-equipos.vercel.app/api/registroEquipos",
        {
          nombre,
        }
      );
      console.log("Respuesta del servidor:", response.data);
      setNombre("");
    } catch (error) {
      console.error("Error en el registro del equipo", error);
    }
  };

  return (
    <form className="d-flex justify-content-between" onSubmit={handleSubmit}>
      <label className="form-label">
        Nombre del equipo:
        <input
          className="form-control"
          type="text"
          value={nombre}
          onChange={handleChange}
          placeholder="Nombre del equipo"
        />
      </label>
      <button className="btn btn-primary" type="submit">
        Registrar equipo
      </button>
    </form>
  );
};

export default RegistrarEquipo;
