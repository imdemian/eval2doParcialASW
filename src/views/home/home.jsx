import { useState } from "react";
import { Button } from "react-bootstrap";
import RegistrarEquipo from "../equipos/registrar";
import ModalSpace from "../../components/modal";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  const [show, setShow] = useState(false);
  const [tituloModal, setTituloModal] = useState(null);
  const [contentModal, setContentModal] = useState(null);

  const registrarEquipo = (content) => {
    setTituloModal("Registrar Equipo");
    setContentModal(content);
    setShow(true);
  };

  return (
    <>
      <div className="container mt-5">
        <Button
          variant="primary"
          onClick={() => registrarEquipo(<RegistrarEquipo />)}
        >
          Registrar Equipo
        </Button>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Fecha</th>
              <th>Equipo 1</th>
              <th>Equipo 2</th>
              <th>Hora</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>John</td>
              <td>Doe</td>
              <td>@johndoe</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jane</td>
              <td>Smith</td>
              <td>@janesmith</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Michael</td>
              <td>Johnson</td>
              <td>@michaeljohnson</td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>Emily</td>
              <td>Williams</td>
              <td>@emilywilliams</td>
            </tr>
            <tr>
              <th scope="row">5</th>
              <td>David</td>
              <td>Brown</td>
              <td>@davidbrown</td>
            </tr>
          </tbody>
        </table>
      </div>
      <ModalSpace setShow={setShow} show={show} title={tituloModal} size={"md"}>
        {contentModal}
      </ModalSpace>
    </>
  );
};

export default Home;
