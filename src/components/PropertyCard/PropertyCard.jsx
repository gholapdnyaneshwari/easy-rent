import "./PropertyCard.css";
import skyscraper from "./skyscraper.png";
import { VectorSquare, Building2, HandCoins, Sofa } from "lucide-react";
import Button from "../Button/Button";
import { useNavigate } from "react-router";


function PropertyInfo({ icon, text }) {
  return (
    <div className="property-info">
      {icon} <span className="property-info-lable">{text}</span>
    </div>
  );
}

function PropertyCard({ id,title, city, area, propertyType, rent, size, rating, furnished }) {
  let navigate = useNavigate();
  return (
    <div className="property-card">
      <img src={skyscraper} alt="property" />
      <h2 className="property-title">{title}</h2>
      <p className="property-address">  {city}</p>
      <p className="property-address"> Area: {area}</p>
      <p className="rating-info"> {rating}/5</p>
      <PropertyInfo icon={<Building2 />} text={propertyType} />

      <PropertyInfo icon={<HandCoins />} text={`₹${rent}/month`} />

      <PropertyInfo icon={<VectorSquare />} text={`${size} sqft`} />

      <PropertyInfo icon={<Sofa />} text={furnished} />

      <div className="card-action">
        <Button title={"Know More"}  onClick={() => {
          navigate(`/property/${id}`);
        }}/>
      </div>
    </div>
  );
}

export default PropertyCard;