import Logo from "./Logo";
import Mensaje from "./Mensaje";
import './Contenido.css';

function Contenido(){
    return(
        <div className="textocontenido row mt-5 mb-5">
            <Logo/>
            <Mensaje/>
        </div>
    );
}

export default Contenido;