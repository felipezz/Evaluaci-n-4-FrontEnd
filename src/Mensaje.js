import './Mensaje.css';

function Mensaje(){
    return(
        <div className="msj col-md-8">
            <p className='msj-p'>El gobierno mundial busca a Monkey D. Luffy, conocido como "Luffy sombrero de paja" y su tripulación, 
                conocidos como "Mugiwaras".</p>
            <p className='msj-p'>Se encuentran en el oceano de Grand Line y son altamente violentos y peligrosos,
                 se recomienda no acercarse y llamar de inmediato a la unidad de marina mas cercana. Cualquier intento de colaborar con Luffy o 
                 algún miembro de su tripulación sera considerado como alta traición y el castigo sera una muerte horrible. </p>
            <p className='msj-p'>Si usted ve la siguiente bandera en un barco, por favor busque un lugar seguro para refugiarse y comuníquese inmediatamente
                con su guardia de marina mas cercano.  </p>
        </div>
    );
}

export default Mensaje;