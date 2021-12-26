import React from "react";
import "./Country.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandHoldingUsd } from "@fortawesome/free-solid-svg-icons";

const Country = (props) => {

      // receive data from Shop.js and checking the object is it in the array or not 
      // const item = props.hasOwnProperty('item') ? props.item : null;
      // const image = props.item.hasOwnProperty('image') ? props.item.image : null;
      // const country = props.item.hasOwnProperty('country') ? props.item.name : null;
      // const cost = props.item.hasOwnProperty('cost') ? props.item.price : null;
      // const brand = props.item.hasOwnProperty('brand') ? props.item.brand : null;
    
  console.log(props);
  const { img, country, infected, recovered, deceased, cost } = props.country;
  const element = <FontAwesomeIcon icon={faHandHoldingUsd} />;
  return (
    <div className="country">
      <div>
        <img className="image" alt="" src={img}></img>
        <h3 className="text-primary">Country:{country}</h3>
        <h3>Infected:{infected}</h3>
        <h3>Recovered:{recovered}</h3>
        <h3>Deceased:{deceased}</h3>
        <h3>Cost:{cost}</h3>
        <button
          onClick={() => props.handleAddToDonation(props.country)}
          className="button"
        >
          {element} Donate Vaccine
        </button>
      </div>
    </div>
  );
};

export default Country;
