import React from 'react'

export const CardArtist = ({ artist }) => {
    return (
        <div className="card">
            <img src="src/assets/images/logoArtist.jpg" className="card-img-top" alt="logo music" />
            <div className="card-body">
                <h5 className="card-title"> { artist.name } </h5>
                <p className="card-text">{ artist.bio }</p>
            </div>
        </div>
    )
}
