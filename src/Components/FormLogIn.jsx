import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function FormLogIn(props){
    return (
        <Container className="d-flex flex-column align-items-center justify-content-center vh-100">
          <h3 className="mb-4">Inicio de Sesión</h3>
          <Form style={{ width: "350px" }}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Nombre de Usuario</Form.Label>
              <Form.Control type="text" placeholder="Ingresa tu Nombre" />
            </Form.Group>
    
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control type="password" placeholder="Ingresa tu Contraseña" />
            </Form.Group>
    
            <Row className="text-center">
              <Col>
              <Link to="/matrizRobot">
                <Button variant="primary" type="submit" className="w-100">
                  Ingresar
                </Button>
              </Link>
              </Col>
              <Col>
                <Button variant="danger" type="button" className="w-100">
                  Cancelar
                </Button>
              </Col>
            </Row>
          </Form>
        </Container>
      );
}

export default FormLogIn;