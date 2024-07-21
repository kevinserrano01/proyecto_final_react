export const CardPlayList = ({ playlist }) => {
    return (
        <div className="card">
            <img src="src/assets/images/logoPlaylist.png" className="card-img-top" alt="logo music" />
            <div className="card-body">
                <h5 className="card-title"> { playlist.name } </h5>
                <p className="card-text">{ playlist.description }</p>
                <p className="card-text">{ playlist.owner }</p>
            </div>
        </div>
    )
}
