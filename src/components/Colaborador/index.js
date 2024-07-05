import "./Colaborador.css"
import { AiFillCloseCircle } from "react-icons/ai";
import {GoHeart , GoHeartFill } from "react-icons/go"
import { useState } from "react";


const Colaborador = (props) => {
    const [corazon, actualizarCorazon] = useState(false)
    
    const cambiarCorazon = () => {
        actualizarCorazon(!corazon)
        console.log(corazon);
    }

    const {nombre,puesto,foto,equipo,id,fav} = props.datos
    const {colorPrimario, eliminarColaborador,like} = props


    return <div className="colaborador">
        <AiFillCloseCircle className="eliminar" onClick={() => eliminarColaborador(id)} />
        <div className="encabezado" style={{backgroundColor:colorPrimario}}>
           <img src={foto} alt={nombre} /> 
        </div>
        <div className="info">
            <h4>{nombre}</h4>
            <h5>{puesto}</h5>
            {fav ? <GoHeartFill color="red" onClick={() => like(id)}/> : <GoHeart onClick={() => like(id)}/> }
        </div>
        <span onClick={cambiarCorazon}>{corazon? <GoHeart/> : <GoHeartFill />}</span>
    </div>
    
}

export default Colaborador