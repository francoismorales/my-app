import { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import RobotDetail from "./RobotDetail";
import { FormattedMessage } from "react-intl";

function Matriz() {
  const [robots, setRobots] = useState([]);
  const [selectedRobotId, setSelectedRobotId] = useState(null);

  useEffect(() => {
    const URL = "http://localhost:3001/robots";
    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        setRobots(data);
      });
  }, []);

  return (
    <div className="contenedor-tabla">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th><FormattedMessage id="robot.table.id" defaultMessage="ID" /></th>
            <th><FormattedMessage id="robot.table.name" defaultMessage="Nombre" /></th>
            <th><FormattedMessage id="robot.table.model" defaultMessage="Modelo" /></th>
            <th><FormattedMessage id="robot.table.manufacturer" defaultMessage="Fabricante" /></th>
          </tr>
        </thead>
        <tbody>
          {robots.map((robot) => (
            <tr key={robot.id} onClick={() => setSelectedRobotId(robot.id)} style={{ cursor: "pointer" }}>
              <td>{robot.id}</td>
              <td>{robot.nombre}</td>
              <td>{robot.modelo}</td>
              <td>{robot.empresaFabricante}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      {selectedRobotId && <RobotDetail id={selectedRobotId} />}
    </div>
  );
}

export default Matriz;
