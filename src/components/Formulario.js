import React, { useState } from 'react';
import Error from './Error';
import PropTypes from 'prop-types'


const Formulario = ({setSearch}) => {

    const [ busqueda, setBusqueda ] = useState('');
    const [ error, setError ] = useState(false)

    const handlerSubmit = e => {
        e.preventDefault()
        if(busqueda.trim() === '' ){
            setError(true)
            return;
        }
        setError(false)
        setSearch(busqueda)
    }

    return ( 
        <form
            onSubmit={handlerSubmit}
        >
            
            <div className="row">
                <div className="form-group col-md-8">
                    <input 
                        type="text" 
                        className="form-control form-control-lg"
                        placeholder="Busca una imagen. ejemplo: Futbol"
                        onChange={e => setBusqueda(e.target.value)}
                        value={busqueda}
                    />
                </div>
                <div className="form-group col-md-4">
                    <input 
                        type="submit" 
                        className="btn btn-lg btn-danger btn-block"
                        value="Buscar"
                    />
                </div>
            </div>
            {error ? <Error mensaje="Debes especificar tu busqueda" /> : null}
        </form>
     );
}

Formulario.propTypes = {
    setSearch: PropTypes.func.isRequired
}
 
export default Formulario;