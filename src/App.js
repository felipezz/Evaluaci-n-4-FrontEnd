import Usuario from "./Usuario"
import Titulo from "./Titulo";
import Contenido from "./Contenido";
import Contacto from "./Contacto";
import Footer from "./Footer";

const usuarios = [
    {nombre: "Monkey D.", apellido: "Luffy", recompensa: "Recompensa: 1.500 millones", url: "img/luffy.jpg"},
    {nombre: "Roronoa", apellido: "Zoro", recompensa: "Recompensa: 320 millones", url: "img/zoro.jfif"},
    {nombre: "Nami", apellido: "", recompensa: "Recompensa: 66 millones", url: "img/nami.jfif"},
    {nombre: "Sogeking", apellido: "", recompensa: "Recompensa: 200 millones", url: "img/sogeking.jfif"},
    {nombre: "Sanji", apellido: "", recompensa: "Recompensa: 330 millones", url: "img/sanji.jfif"},
    {nombre: "Tony Tony", apellido: "Chopper", recompensa: "Recompensa: 10 millones", url: "img/chopper.jfif"},
    {nombre: "Nico", apellido: "Robin", recompensa: "Recompensa: 130 millones", url: "img/robin.jfif"},
    {nombre: "Franky", apellido: "", recompensa: "Recompensa: 94 millones", url: "img/franky.jfif"}
];

const usuarioItems = usuarios.map(usuario =>
    
    <Usuario nombre={usuario.nombre} apellido={usuario.apellido} recompensa={usuario.recompensa} url={usuario.url} alt={usuario.nombre}/>
 
    );

function App(){
    return(
    <div className='container mt-4'>
        <Titulo/>
        <hr></hr>
        <Contenido/>
        <div className="row">
            <h3 className="mt-5 mb-5">Miembros de la tripulacion y sus recompensas: </h3>
            {usuarioItems}
        </div>
        <Contacto/>
        <Footer/>
    </div>   
    );
}
export default App