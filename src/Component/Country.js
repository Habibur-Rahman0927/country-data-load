import React from 'react';

const Country = (props) => {
    // console.log(props)
    const {name, population, region, flag} = props.country;
    const flagStyle = {height : '80px'};
    const handleAddCountry = props.handleAddCountry;
    return (
        <div style={{textAlign : 'center',border : '5px solid red',margin : '50px'}}>
            <h4>The country name : {name}</h4>
            <img style={flagStyle} src={flag} alt="" />
            <p>Population : {population}</p>
            <p><small>Region : {region}</small></p>
            <button onClick={() => handleAddCountry(props.country)} style={{margin: '10px'}}>Add Country</button>
        </div>
    );
};

export default Country;