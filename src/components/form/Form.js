import { useState } from "react"
import "./Form.css"
import Input from "../Input"
import Select from "../select"
import Boton from "../boton"


const Form = (props) => {
    const [nombre, setNombre] = useState("")
    const [puesto, setPuesto] = useState("")
    const [foto, setfoto] = useState("")
    const [equipo, setEquipo] = useState("")
    const [titulo, actualizarTitulo] = useState("")
    const [color, actualizarColor] = useState("")

    const {registrar, crearEquipo} = props



    const manejarEnvio = (e) => {
        e.preventDefault()
        console.log("enviando", e)
        let datosEnviar = {
            nombre: nombre,
            puesto,
            foto,
            equipo
        }
        registrar(datosEnviar)
    }

    const manejarNuevoEquipo = (e) => {
        e.preventDefault()
        crearEquipo({titulo, colorPrimario: color});
    } 

    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <Input 
                titulo="Nombre" 
                placeholder="Ingresar nombre" 
                required={true} 
                valor={nombre} 
                actualizaValor={setNombre} 
            />
            <Input 
                titulo="Puesto" 
                placeholder="Ingresar puesto" 
                required 
                valor={puesto} 
                actualizaValor={setPuesto}
            />
            <Input 
                titulo="Foto" 
                placeholder="Ingresar enlace de foto" 
                required 
                valor={foto} 
                actualizaValor={setfoto} 
            />
            <Select valor={equipo} actualizaValor={setEquipo} equipos={props.equipos}/>
            <Boton>Crear</Boton>
        </form>
        <form onSubmit={manejarNuevoEquipo}>
            <h2>Rellena el formulario para crear el equipo.</h2>
            <Input 
                titulo="Titulo" 
                placeholder="Ingresar titulo" 
                required={true} 
                valor={titulo} 
                actualizaValor={actualizarTitulo} 
            />
            <Input 
                titulo="Color" 
                placeholder="Ingresar el color hexadecimal" 
                required 
                valor={color} 
                actualizaValor={actualizarColor}
                type="color"
                className=".campo-color"
            />
            <Boton>Registrar equipo</Boton>
        </form>
    </section>
}

export default Form