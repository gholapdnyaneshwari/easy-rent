import { useParams } from "react-router";
import "./PropertyDetails.css";
import { useEffect, useState } from "react";
import Skyscraper from "./skyscraper.png";
import PROPERTIES from "./../../data";
import RatingView from "../../components/RatingView/RetingView";


function PropertyDetails() {
    const { id } = useParams();
    const [propertyDetails, setPropertyDetails] = useState({});
    useEffect(() => {
        const property = PROPERTIES.find((prop) => prop.id === parseInt(id));
        if (property) {
            setPropertyDetails(property);
        }

    }, [id]);
    return (
        <div>
            <img src={Skyscraper} alt="property" className="property-image" />
            <h1>{propertyDetails.title} </h1>
            <p>{propertyDetails.city}</p>
            <p>{propertyDetails.area}</p>
            <p>{propertyDetails.size} sqft</p>
            <p> {propertyDetails.propertyType}</p>
            <p> ₹{propertyDetails.rent}/month</p>
            <p>{propertyDetails.furnished}</p>
            <p>{propertyDetails.rating}/5</p>
            <div>
        {propertyDetails?.reviews?.map((review, index) => {
            return (
                <div key={index} className="review-card">
                    <div className="review-card-avatar">{review.reviewer.substring(0, 1).toUpperCase()}</div>
                    <div>
                        <p><RatingView rating={review.rating} /></p>
                    <p>{review.comment}-{review.reviewer}</p>
                    </div>
                    
                </div>
            );
        })}
            </div>
        </div>
    );
}

export default PropertyDetails;