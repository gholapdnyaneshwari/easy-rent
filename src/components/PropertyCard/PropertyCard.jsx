import "./PropertyCard.css";


function PropertyCard({ title, propertyType, size, city }) {
  return (
    <div className="property-card">
    <h2>{title}</h2>
    <p> type: {propertyType}</p>
    <p> size: {size}</p>
    <p> city: {city}</p>
    </div>
  );
}

export default PropertyCard;