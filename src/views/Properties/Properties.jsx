import "./Properties.css";
import PROPERTIES from "../../data";

function Properties() {
  return (
    <div>
      <h1>Properties</h1>

      {PROPERTIES.map((propertyObj) => {
        return (
          <div className="property" key={propertyObj.id}>
            <h2>{propertyObj.title}</h2>
            <p>City: {propertyObj.city}</p>
            <p>Area: {propertyObj.area}</p>
            <p>Type: {propertyObj.propertyType}</p>
            <p>Size: {propertyObj.size}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Properties;