import React from 'react';
import Countries from '../Countries/Countries';
import './Donation.css';

const Donation = (props) => {
    //const { img, country, infected, recovered, deceased, cost } = props.country;
    const donation = props.donation;
    //const item = props.hasOwnProperty('item') ? props.item : null;

    let total = 0;
    for (const country of donation) {
        total = total + country.cost;

    }

    return (
        <div className='donation'>

            <h2 className="text-center">Your selected items</h2>
            
            {
                donation.map(item =>
                    <div className="donation-item">
                        <p>{item.name}</p>
                        <img className="donation-image" src={item.img} alt="" /> = ${item.cost}
                    </div>
                )
            }

            <hr />
            <h2 className='donation-titile'>Vaccine Donation Count</h2>
            <h3>Countries Selected :{props.donation.length}</h3>
            <h3>Total Cost:${total}</h3>



        </div>

    );
};

export default Donation;