import "./PropertyCard.css";
import skyscraper from "./skyscraper.png";

function PropertyCard({ title, city, area, propertyType }) {
  return (
    <div className="property-card">
      <img src={skyscraper} alt="property" />
      <h2 className="property-title">{title}</h2>
      <p>{city}</p>
      <p>{area}</p>
      <p>{propertyType}</p>
    </div>
  );
}

export default PropertyCard;