import React from 'react'

export const CardAlbum = ({ album }) => {
    return (
        <div className="card">
            <img src="src/assets/images/logoAlbum.jpg" className="card-img-top" alt="logo music" />
            <div className="card-body">
                <h5 className="card-title"> { album.title } </h5>
                <p className="card-text">{ album.year }</p>
            </div>
        </div>
    )
}
