import "./Input.css"

const Input = (props) => {
    const placeholderChange = `${props.placeholder}...`
    
    const manejarCambio = (e) =>  {
        console.log("cambio",e.target.value)
        props.actualizaValor(e.target.value) 
    }
 
    const {type = "text"} = props

 return <div className={`campo campo-${type}`}> 
        <label>{props.titulo}</label>
        <input 
            type={type} 
            placeholder={placeholderChange} 
            required={props.required} 
            value={props.valor} 
            onChange={manejarCambio}
        />
    </div>
}

export default Input