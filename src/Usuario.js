import Foto from "./Foto";
import Info from "./Info";
import './Usuario.css';

function Usuario(props){
    return(
        <div className="col-md-3">
            <div className="card">
                <Foto url={props.url} alt={props.alt}/>
                <Info nombre={props.nombre} apellido={props.apellido} recompensa={props.recompensa}/>
            </div>
        </div>
    );
}

export default Usuario;