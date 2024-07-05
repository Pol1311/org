import "./Select.css"

const Select = (props) => {


    const manejarCambio = (e) => {
        console.log("cambio",e.target.value)
        props.actualizaValor(e.target.value)
    }

    return <div className="campo-select">
        <label>Equipos</label>
        <select value={props.valor} onChange={manejarCambio}>
            <option value="" disabled defaultValue="" hidden >Select</option>
            {props.equipos.map((equipo, index) => <option key={index} value={equipo}>{equipo}</option>)}
        </select>
    </div>
}

export default Select