import React from 'react';
import ImgCards from './ImgCards';
import PropTypes from 'prop-types'


const ListaImagenes = ({imagenes}) => {
    return ( 
        <div className="col-12 row p-5">
            {imagenes.map(imagen =>(
                <ImgCards 
                    key={imagen.id}
                    imagen={imagen}
                />
            ))}
        </div>
     );
}

ListaImagenes.propTypes = {
    imagenes:PropTypes.array.isRequired
}
 
export default ListaImagenes;