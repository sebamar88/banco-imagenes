import React from 'react';
import PropTypes from 'prop-types'

const ImgCards = ({imagen}) => {

    const { largeImageURL, tags, previewURL, likes, views } = imagen;
    
    return ( 
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
            <div className="card">
                <img src={previewURL} className="card-img-top" alt={tags} 
            />
                <div className="card-body">
                    <h5 className="card-text">Likes: {likes}</h5>
                    <h5 className="card-text">Views: {views}</h5>
                    
                </div>
                <div className="card-footer">
                    <a 
                    href={largeImageURL} 
                    className="btn btn-primary btn-block"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                     Ver Imagen Completa       
                    </a>
                </div>
            </div>

        </div>
     );
}

ImgCards.propTypes = {
    imagen:PropTypes.array.isRequired
}
 
export default ImgCards;