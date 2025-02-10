import PropTypes from "prop-types"

const StarRating = ({ vote }) => {

    const renderStars = () => {
        const stars = [];
        for (let i = 0; i < 5; i++) {
            stars.push(<i className={`bi bi-star${i < vote ? '-fill' : ''}`}></i>)
        }
        return stars;
    }

    return (
        <span className="text-warning">{renderStars()}</span>
    )
}

StarRating.propTypes = {
    vote: PropTypes.number.isRequired
}

export default StarRating