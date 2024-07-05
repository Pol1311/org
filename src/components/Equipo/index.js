import "./Equipo.css"
import Colaborador from "../Colaborador"

const Equipo =(props) => {
    //Destructuracion
    //Es lo mismo que :
    //const colorPrimario = props.datos.colorPrimario
    const {titulo,colorPrimario,colorSecundario,id} = props.datos
    const {colaborador, actualizarColor,like} = props
    const bordeTitulo =  {borderColor: colorSecundario}


    return <>
        { colaborador.length > 0 && 
            <section className="equipo" style={{backgroundColor:colorPrimario}}>
                <input
                type="color"
                className="botonColor"
                value={colorPrimario}
                onChange={(e)=> {actualizarColor(e.target.value, id)}}

                />
                <h3 style={bordeTitulo}>{titulo}</h3>
                <div className="colaboradores">
           
                    { colaborador.map( (colaboradores, index) => 
                        {
                            return <Colaborador datos={colaboradores}  
                            key={index} colorPrimario={colorSecundario} 
                            eliminarColaborador={props.eliminarColaborador} 
                            like={like}/>
                        })
                    }
                </div>
            </section>
        }
    </>
}

export default Equipo