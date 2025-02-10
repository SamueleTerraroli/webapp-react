import { useGlobalContext } from "../context/GlobalContext";
import { useEffect } from "react";

import MovieCard from "../components/movieCard";

const HomePage = () => {

    const { fetchMovies, movies } = useGlobalContext();

    const renderMovies = () => {
        return movies.map(movie => {
            return (
                <div className="col" key={movie.id}>
                    <MovieCard movieData={movie} />
                </div>
            )
        })
    }


    useEffect(fetchMovies, []);

    return (
        <>
            <h1 className="text-center my-3">MovieHUB</h1>
            <div className="row row-cols-3">
                {renderMovies()}
            </div>
        </>
    )
}

export default HomePage