import './Contacto.css';
import Formulario from './Formulario';

function Contacto(){
    return(
        <div className="contacto">
            <h3>¡Contactanos! Puedes hacer una denuncia anonima llenando el siguiente formulario: </h3>
            <Formulario/>
        </div>
    );
}

export default Contacto