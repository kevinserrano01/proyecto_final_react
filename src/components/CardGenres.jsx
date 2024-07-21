import React from 'react'

export const CardGenres = ({ gen }) => {
    return (
        <div className="card">
            <img src="src/assets/images/logoAlbum.jpg" className="card-img-top" alt="logo music" />
            <div className="card-body">
                <h5 className="card-title"> { gen.name } </h5>
                <p className="card-text">{ gen.description }</p>
            </div>
        </div>
    )
}
