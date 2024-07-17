import '../styles/CardMusic.css'
import PlayCircleIcon from '@mui/icons-material/PlayCircle';


export const CardMusic = ({title, author}) => {
    return (
        <div id='cardMusic' className="card mb-3">
            <div className="row g-0">
                <div className="col-md-4">
                    <img src="src/assets/images/musicLogo.jpg" className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <p className="card-title">{ title }</p>
                        <p className="card-text">{ author }</p>
                        {/* <p className="card-text">{duration}</p> */}
                        <button type="button" className="btn btn-success"> <PlayCircleIcon></PlayCircleIcon> </button>
                    </div>
                </div>
            </div>
        </div>
    )
}