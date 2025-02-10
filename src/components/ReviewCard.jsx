import StarRating from "./StarRating"


const ReviewCard = ({ reviews }) => {

    const { text, name, vote } = reviews;
    return (
        <div className="card">
            <div className="card-body">
                <p className="card-text">{text}</p>
                <StarRating vote={vote} />
                <address><i>By {name}</i></address>
            </div>
        </div>
    )
}

export default ReviewCard