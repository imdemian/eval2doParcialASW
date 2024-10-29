/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const RegistrarPartido = () => {
  const [equipo1, setEquipo1] = useState("");
  const [equipo2, setEquipo2] = useState("");
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");
  const [listaEquipos, setListaEquipos] = useState([]);

  const obtenerEquipos = async () => {
    try {
      const response = await axios.get(
        "https://eval2do-parcial-servicio-equipos.vercel.app/api/equipos"
      );
      setListaEquipos(response.data);
    } catch (error) {
      console.error("Error al obtener la lista de equipos", error);
    }
  };

  useEffect(() => {
    obtenerEquipos();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://eval2do-parcial-servicio-partidos.vercel.app/api/registroPartidos",
        {
          equipo1,
          equipo2,
          fecha,
          hora,
        }
      );
      console.log("Partido registrado:", response.data);
      alert("Partido registrado exitosamente");
    } catch (error) {
      console.error("Error al registrar el partido", error);
      alert("Hubo un error al registrar el partido");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="needs-validation" noValidate>
      <div className="mb-3">
        <label htmlFor="equipo1" className="form-label">
          Equipo 1:
        </label>
        <select
          id="equipo1"
          className="form-select"
          value={equipo1}
          onChange={(e) => setEquipo1(e.target.value)}
          required
        >
          <option value="">Seleccione un equipo</option>
          {listaEquipos.map((equipo) => (
            <option key={equipo._id} value={equipo.nombre}>
              {equipo.nombre}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-3">
        <label htmlFor="equipo2" className="form-label">
          Equipo 2:
        </label>
        <select
          id="equipo2"
          className="form-select"
          value={equipo2}
          onChange={(e) => setEquipo2(e.target.value)}
          required
        >
          <option value="">Seleccione un equipo</option>
          {listaEquipos.map((equipo) => (
            <option key={equipo._id} value={equipo.nombre}>
              {equipo.nombre}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-3">
        <label htmlFor="fecha" className="form-label">
          Fecha:
        </label>
        <input
          type="date"
          id="fecha"
          className="form-control"
          value={fecha}
          onChange={(e) => setFecha(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="hora" className="form-label">
          Hora:
        </label>
        <input
          type="time"
          id="hora"
          className="form-control"
          value={hora}
          onChange={(e) => setHora(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Registrar partido
      </button>
    </form>
  );
};

export default RegistrarPartido;
