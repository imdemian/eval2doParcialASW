import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import axios from "axios";
import RegistrarEquipo from "../equipos/registrar";
import RegistrarPartido from "../partidos/registrarPartido";
import ModalSpace from "../../components/modal";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  const [show, setShow] = useState(false);
  const [tituloModal, setTituloModal] = useState(null);
  const [contentModal, setContentModal] = useState(null);
  const [equipos, setEquipos] = useState([]);
  const [partidos, setPartidos] = useState([]);

  const obtenerEquipos = async () => {
    try {
      const response = await axios.get(
        "https://eval2doparcial-api-gateway.onrender.com/equipos/api/equipos"
      );
      setEquipos(response.data);
      console.log("Equipos:", response.data);
    } catch (error) {
      console.error("Error al obtener la lista de equipos", error);
    }
  };

  const obtenerPartidos = async () => {
    try {
      const response = await axios.get(
        "https://eval2doparcial-api-gateway.onrender.com/partidos/api/partidos"
      );
      setPartidos(response.data);
    } catch (error) {
      console.error("Error al obtener la lista de partidos", error);
    }
  };

  useEffect(() => {
    obtenerEquipos();
    obtenerPartidos();
  }, []);

  const registrarEquipo = (content) => {
    setTituloModal("Registrar Equipo");
    setContentModal(content);
    setShow(true);
  };

  const registrarPartido = (content) => {
    setTituloModal("Registrar Partido");
    setContentModal(content);
    setShow(true);
  };

  return (
    <>
      <div className="container mt-5">
        <div className="d-flex flex-column align-items-center">
          <h1>Liga Futbol</h1>
          <h2>Partidos</h2>
          <h4>Registra un equipo y después programa un partido</h4>
        </div>
        <div className="d-flex justify-content-around">
          <Button
            variant="primary"
            onClick={() => registrarEquipo(<RegistrarEquipo />)}
          >
            Registrar Equipo
          </Button>
          <Button
            variant="primary"
            className="ml-2"
            onClick={() =>
              registrarPartido(<RegistrarPartido equipos={equipos} />)
            }
          >
            Registrar Partido
          </Button>
        </div>
        {partidos.length === 0 ? (
          <h3 className="mt-3">No hay partidos</h3>
        ) : (
          <table className="table table-striped mt-3">
            <thead>
              <tr>
                <th>Fecha</th>
                <th>Equipo 1</th>
                <th>Equipo 2</th>
                <th>Hora</th>
              </tr>
            </thead>
            <tbody>
              {partidos.map((partido) => (
                <tr key={partido._id}>
                  <td>{partido.fecha}</td>
                  <td>{partido.equipo1}</td>
                  <td>{partido.equipo2}</td>
                  <td>{partido.hora}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      <ModalSpace setShow={setShow} show={show} title={tituloModal} size={"md"}>
        {contentModal}
      </ModalSpace>
    </>
  );
};

export default Home;
