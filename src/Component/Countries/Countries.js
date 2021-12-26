import React, { useEffect, useState } from "react";
import Country from "../Country/Country";
import Donation from "../Donatiion/Donation";
import "./Countries.css";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [donation,setDonation]=useState([]);

  useEffect(() => {
    fetch("./countries.JSON")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  const handleAddToDonation=(country)=>{
    const newDonation=[...donation,country];
    setDonation(newDonation);
  }
  return (
    <div className="vaccine-container">
      <div className="svaccine-container">
        <div className="grid">
        {
              countries.map(country=> <Country 
              key={Country.key}
              country={country}
              handleAddToDonation={handleAddToDonation}
              ></Country>)
          }
        </div>
      </div>
      <div className="donation-container">
        <Donation donation={donation}></Donation>
      </div>
    </div>
  );
};

export default Countries;
