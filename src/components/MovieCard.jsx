import PropTypes from "prop-types";
import StarRating from "./StarRating";
import { NavLink } from "react-router-dom";

const MovieCard = ({ movieData }) => {
    const { id, title, image_url, average_vote } = movieData;

    return (

        <div>
            <div className="card mb-4">
                {image_url && <img className="card-image-top" src={image_url} alt={title} />}
                <div className="card-body">
                    <h4 className="card-title">{title}</h4>
                    {average_vote && <StarRating vote={average_vote} /> || 'Nessuna recensione disponibile'}
                    <div className="my-3">
                        <NavLink className='btn btn-primary' aria-current='page' to={`movies/${id}`}>Scopri di più</NavLink>
                    </div>

                </div>
            </div>
        </div>
    )
}

MovieCard.propTypes = {
    movieData: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        director: PropTypes.string.isRequired,
        image_url: PropTypes.string,
        abstract: PropTypes.string,
        average_vote: PropTypes.number
    }).isRequired
}

export default MovieCard