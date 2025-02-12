import { useParams, NavLink, useNavigate } from "react-router-dom"
import { useEffect } from "react";
import { useGlobalContext } from "../context/GlobalContext";
import ReviewCard from "../components/ReviewCard";
import ReviewForm from "../components/ReviewForm";

import StarRating from "../components/StarRating";

const MoviePage = () => {

    const { id } = useParams();
    const { movie, fetchMovie } = useGlobalContext();
    const redirect = useNavigate();

    const renderReviews = () => {
        return movie.reviews.map(item => <ReviewCard key={item.id} review={item} />)
    }

    useEffect(() => fetchMovie(id, () => redirect('/404')), [])

    return (
        <>
            <header>
                <div className="d-flex row-cols-2">
                    {movie?.image && <img src={movie?.image_url} alt={movie?.title} className="img-movie-detail" />}
                    <div className="p-4">
                        <h1>{movie?.title}</h1>
                        <h3><i>By {movie?.director}</i></h3>
                        <p>{movie?.abstract}</p>
                        <div><StarRating vote={movie?.average_vote} /></div>

                    </div>
                </div>
            </header>
            <section>
                {movie?.reviews && renderReviews()}
            </section>
            <section>
                <ReviewForm movie_id={movie?.id} fetchData={fetchMovie} />
            </section>
            <footer>
                <NavLink className='btn btn-primary' aria-current='page' to='/'>Torna all'elenco</NavLink>
            </footer>
        </>
    )
}

export default MoviePage