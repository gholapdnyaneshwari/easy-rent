import { useParams } from "react-router";
import "./PropertyDetails.css";
import { useEffect, useState } from "react";
import Skyscraper from "./skyscraper.png";
import {PROPERTIES} from "./../../data";

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

        </div>
    );
}

export default PropertyDetails;