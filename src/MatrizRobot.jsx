import Matriz from "./Components/Matriz";
import imagenParcial from "./images/imagenParcial.png";

function MatrizRobot() {

  const [robot, setRobot] = useState([]);
   useEffect(()=>{
       const URL = "http://localhost:3001";
       fetch(URL).then(data => data.json()).then(data => {
           setRobot(data);
       })
   }, []);

  return (
    <>
    <div>
        <h1 className="text-center mb-4">Adopta un Robot con Robot Lovers!</h1>
        <img src={imagenParcial} alt="ImageRobot" className="header-image" />
    </div>
    <Matriz/>
    </>
  );
}

export default MatrizRobot;