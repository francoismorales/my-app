import Table from 'react-bootstrap/Table';

function Matriz(props){
    return(
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Modelo</th>
          <th>Fabricante</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{props.id}</td>
          <td>{props.nombre}</td>
          <td>{props.modelo}</td>
          <td>{props.fabricante}</td>
        </tr>
      </tbody>
    </Table>
  );
    
}

export default Matriz;