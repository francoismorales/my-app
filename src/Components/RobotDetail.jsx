import { useState, useEffect } from "react";
import { FormattedMessage } from "react-intl";
import Card from "react-bootstrap/Card";

function RobotDetail({ id }) {
  const [robotDetail, setRobotDetail] = useState(null);

  useEffect(() => {
    const URL = `http://localhost:3001/robots/${id}`;
    fetch(URL)
      .then((response) => response.json())
      .then((data) => setRobotDetail(data));
  }, [id]);

  return (
    <div className="robot-detail-container">
      {robotDetail ? (
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={robotDetail.imagen} />
          <Card.Body>
            <Card.Title>{robotDetail.nombre}</Card.Title>
            <Card.Text>
              <b>
                <FormattedMessage id="robot.detail.year" defaultMessage="Año de fabricación" />:{" "}
              </b>
              {robotDetail.añoFabricacion}
            </Card.Text>
            <Card.Text>
              <b>
                <FormattedMessage id="robot.detail.processing" defaultMessage="Capacidad de procesamiento" />:{" "}
              </b>
              {robotDetail.capacidadProcesamiento}
            </Card.Text>
            <Card.Text>
              <b>
                <FormattedMessage id="robot.detail.humor" defaultMessage="Humor" />:{" "}
              </b>
              {robotDetail.humor}
            </Card.Text>
          </Card.Body>
        </Card>
      ) : (
        <p>
          <FormattedMessage id="robot.detail.loading" defaultMessage="Cargando detalles del robot..." />
        </p>
      )}
    </div>
  );
}

export default RobotDetail;
