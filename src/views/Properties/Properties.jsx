import "./Properties.css";
import {PROPERTIES} from "./../../data";
function Properties() {
  return (
    <div>
        <h1>Properties</h1>
        {PROPERTIES.map((propertyObj) => {
            return (
                <div className="property " key={propertyObj.obj}>
                    <h2>{propertyObj.title}</h2>
                    <p>{propertyObj.city} </p>
                    </div>
            );
        })}
    </div>
  );
}

export default Properties;