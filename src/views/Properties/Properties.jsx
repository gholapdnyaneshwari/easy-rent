import "./Properties.css";
import PROPERTIES from "../../data";
import PropertyCard from "../../components/PropertyCard/PropertyCard";

function Properties() {
  return (
    <div>
      <h1>Properties</h1>

      <div className="properties-container">
        {PROPERTIES.map((propertyObj) => (
          <PropertyCard
            key={propertyObj.id}
            id={propertyObj.id}
            title={propertyObj.title}
            city={propertyObj.city}
            area={propertyObj.area}
            size={propertyObj.size}
            propertyType={propertyObj.propertyType}
            rent={propertyObj.rent}
            rating={propertyObj.rating}
            furnished={propertyObj.furnished}
          />
        ))}
      </div>
    </div>
  );
}

export default Properties;