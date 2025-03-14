import FormLogIn from "./Components/FormLogIn";
import Footer from "./Components/Footer";
import imagenParcial from "./images/imagenParcial.png";



function LogIn(){
    return (
        <>
        <div>
        <h1 className="text-center mb-4">Adopta un Robot con Robot Lovers!</h1>
        <img src={imagenParcial} alt="ImageRobot" className="header-image" />
        </div>
        <FormLogIn/>
        <Footer/>
        </>
    );
}

export default LogIn;