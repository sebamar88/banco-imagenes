import React, { useState, useEffect } from 'react';
import Formulario from './components/Formulario';
import ListaImagenes from './components/ListaImagenes';
import axios from 'axios'

function App() {

  const [search, setSearch] = useState('')
  const [imagenes, setImagenes] = useState([])
  const [paginaActual, setPaginaActual] = useState(1);
  const [paginasTotales, setPaginasTotales] = useState(1);

  useEffect(() =>{
    if(search === '') return;
    const consultaAPI = async () =>{
      const busqueda = search.replace(' ', '+');
      const imagenesPorPagina = 30;
      const key= '17162403-b4a741107f91aa0768bb63557';
      const url = `https://pixabay.com/api/?key=${key}&q=${busqueda}&per_page=${imagenesPorPagina}&page=${paginaActual}`;
      const respuesta = await axios.get(url);
      setImagenes(respuesta.data.hits)

      //calcular total de paginas
      const calcularTotalPaginas = Math.ceil(respuesta.data.totalHits / imagenesPorPagina);
      setPaginasTotales(calcularTotalPaginas);

      //mover pantalla hacia arriba
      const jumbotron = document.querySelector('.jumbotron');
      jumbotron.scrollIntoView({ behavior: 'smooth'})
    }
    consultaAPI()
  }, [search, paginaActual])

  const paginaAnterior = () => {
    const nuevaPaginaActual = paginaActual - 1;

    if(nuevaPaginaActual === 0) return;

    setPaginaActual(nuevaPaginaActual)
  }

  const paginaSiguiente = () => {
    const nuevaPaginaActual = paginaActual + 1;

    if(paginaActual > paginasTotales) return;

    setPaginaActual(nuevaPaginaActual)
  }
  
  return (
    <div className="container">
      <div className="jumbotron">
        <p className="lead text-center">
          Buscador de imagenes
        </p>
        <Formulario
          setSearch={setSearch}
        />
      </div>
      <div className="row justify-content-center">
      <ListaImagenes 
          imagenes={imagenes}
        />
        {(paginaActual === 1) ? 
      null
      :
      <button 
      className="btn btn-info mr-1"
      onClick={paginaAnterior}
      >&laquo; Anterior </button>
      }
      {(paginaActual === paginasTotales) ?
      null
      : 
      <button 
      className="btn btn-info"
      onClick={paginaSiguiente}
      >Siguiente &raquo;</button>
    }
        
      </div>
    </div>
  );
}

export default App;
