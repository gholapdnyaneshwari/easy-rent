import "./RatingView.css";

const CoveredStarFromPer =({per}) => {
    return (<div className="per-star">
        <div className="per-star-cover" style={{width: `${100-per}%`}}></div>&#9733;
    </div>);
};
function RatingView({ rating}) {
    const roundedRating = Math.floor(rating);
    const decimalPart = (rating - roundedRating).toFixed(1)*10;
    return(
        <div className="reting-view-container">
            {Array.from({ length: roundedRating }). map((_, index) => {
                return (
                    <span key={index} className="star">&#9733;</span>
                );
            })}
           <CoveredStarFromPer per={decimalPart*10} />
            <span>{rating}</span>
        </div>
    )
}
export default RatingView;