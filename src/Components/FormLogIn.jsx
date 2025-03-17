import { useState } from "react";
import { Form, Button, Container, Row, Col, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function FormLogIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);

    fetch("http://localhost:3001/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ login: username, password: password }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "success") {
          navigate("/matrizRobot");
        } else {
          setError(true);
        }
      })
      .catch((error) => {
        console.error("Error en la autenticación:", error);
        setError(true);
      })
      .finally(() => setLoading(false));
  };

  const handleCancel = () => {
    setUsername("");
    setPassword("");
    setError(false);
  };

  return (
    <Container className="d-flex flex-column align-items-center justify-content-center">
      <h3 className="mb-4">Inicio de Sesión</h3>
      <Form style={{ width: "350px" }} onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Nombre de Usuario</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Ingresa tu Nombre" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control 
            type="password" 
            placeholder="Ingresa tu Contraseña" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required
          />
        </Form.Group>

        <Row className="text-center">
          <Col>
            <Button variant="primary" type="submit" className="w-100" disabled={loading}>
              {loading ? "Ingresando..." : "Ingresar"}
            </Button>
          </Col>
          <Col>
            <Button variant="danger" type="button" className="w-100" onClick={handleCancel}>
              Cancelar
            </Button>
          </Col>
        </Row>
      </Form>

      {error && (
        <Alert variant="danger" className="mt-3 w-100 text-center">
          Error de autenticación. Intente de nuevo.
        </Alert>
      )}
    </Container>
  );
}

export default FormLogIn;
