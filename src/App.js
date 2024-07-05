import { useState } from 'react';
import Header from './components/header/Header';
import Form from "./components/form/Form";
import MiOrg from './components/miOrg';
import Equipo from './components/Equipo';
import Footer from './components/Footer';
import hexToRgba from "hex-to-rgba";
import { v4 as uuidv4 } from 'uuid';



function App() {
  const [mostrarForm, actualizarForm] = useState(false)
  const [colaboradores,actualizarColaborador] = useState([{ 
    id: uuidv4(),
    equipo:"Front End",
    foto:"https://github.com/Pol1311.png",
    nombre:"Pol",
    puesto:"Alumno",
    fav: true
  },{
    id: uuidv4(),
    equipo:"Front End",
    foto:"https://github.com/Pol1311.png",
    nombre:"Polo",
    puesto:"Alumna",
    fav: false
  },{
    id: uuidv4(),
    equipo:"Data Science",
    foto:"https://github.com/Pol1311.png",
    nombre:"Lara",
    puesto:"Instructor",
    fav: true
  },{
    id: uuidv4(),
    equipo:"Data Science",
    foto:"https://github.com/Pol1311.png",
    nombre:"Luis",
    puesto:"Instructor",
    fav: true
  },{
    id: uuidv4(),
    equipo:"Data Science",
    foto:"https://github.com/Pol1311.png",
    nombre:"Jorge",
    puesto:"Instructor",
    fav: true
  },{
    id: uuidv4(),
    equipo:"Devops",
    foto:"https://github.com/Pol1311.png",
    nombre:"Renata",
    puesto:"Instructor",
    fav: false
  }])
  const [equipos, actualizarEquipos] = useState ([
    {
      id: uuidv4(),
      titulo: "Programming",
      colorPrimario: "#D9F7E9",
      colorSecundario: "#57C278 ",
    },
    {
      id: uuidv4(),
      titulo: "Front End",
      colorPrimario: "#E8F8FF",
      colorSecundario: "#82CFFA",
    },
    {
      id: uuidv4(),
      titulo: "Data Science",
      colorPrimario: "#F0F8E2",
      colorSecundario: "#A6D157",
    },
    {
      id: uuidv4(),
      titulo: "Devops",
      colorPrimario: "#FDE7E8",
      colorSecundario: "#E06B69",
    },
    {
      id: uuidv4(),
      titulo: "UX and Design",
      colorPrimario: "#FAE9F5",
      colorSecundario: "#DB6EBF",
    },
    {
      id: uuidv4(),
      titulo: "Apps",
      colorPrimario: "#FFF5D9",
      colorSecundario: "#FFBA05",
    },
    {
      id: uuidv4(),
      titulo: "Managment and Innovation",
      colorPrimario: "#FFEEDF",
      colorSecundario: "#FF8A29",
    }
  ])
  

  const like = (id) => {
    console.log("like",id);
    const cambiarLike = colaboradores.map((colaborador) => {
      if (colaborador.id === id){
        colaborador.fav = !colaborador.fav
      }
      return colaborador
     })
     actualizarColaborador(cambiarLike)
  }
 
  const cambiarMostrar = () => {
    actualizarForm(!mostrarForm)
  }



  const crearEquipo = (nuevoEquipo) => {
    console.log(nuevoEquipo);
    actualizarEquipos([...equipos, {...nuevoEquipo, id: uuidv4()}])
  }
  
  const registrarColaborador = (colaborador) => {
    console.log("colaborador", colaborador);
    //Spread operator
    actualizarColaborador([...colaboradores, colaborador])
  }
 
  const actualizarColor = (color, id) => {
    console.log("Actualizar Color", color,id);
    const equiposActualizados = equipos.map((equipo) => {
      if(equipo.id === id) {
        equipo.colorSecundario = color
        equipo.colorPrimario = hexToRgba(color,0.5)
      }
      return equipo
    } )
    actualizarEquipos(equiposActualizados)
  }

  const eliminarColaborador = (id) => {
    console.log("Eliminar colborador ", id );
    const eliminarColaborador = colaboradores.filter((colaborador) => colaborador.id !== id)
    actualizarColaborador(eliminarColaborador);
  }



 //condicion && se Muestra
  return (
    <div className="App">
      <Header />
      {/*mostrarForm ? <Form /> : <></> */}
      {mostrarForm && <Form equipos= {equipos.map((equipo) => equipo.titulo)} 
      registrar={registrarColaborador} 
      crearEquipo={crearEquipo}
      />}
      
      <MiOrg cambiarMostrar={cambiarMostrar}/>
 
 
      {equipos.map( (equipo) => <Equipo 
        datos={equipo} 
        key={equipo.titulo} 
        colaborador={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)} 
        eliminarColaborador={eliminarColaborador} actualizarColor={actualizarColor}
        like={like}
      />)}

      <Footer />
  
    </div>
  );
}

export default App;
