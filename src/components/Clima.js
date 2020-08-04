import React from "react";
import PropTypes from "prop-types";

const Clima = ({ resultado }) => {
  const { name, main } = resultado;

  if (!name) return null;

  const kelvin = 273.15;

  return (
    <div className="card-panel col s12">
      <div className="black-text">
        <h2>The current temperature in {name} is: </h2>
        <p className="temperatura">
          {parseFloat(main.temp - kelvin, 10).toFixed(2)}
          <span> &#x2103; </span>
        </p>
        <p>
          Max Temp: {parseFloat(main.temp_max - kelvin, 10).toFixed(2)}
          <span> &#x2103; </span>
        </p>
        <p>
          Min Temp: {parseFloat(main.temp_min - kelvin, 10).toFixed(2)}
          <span> &#x2103; </span>
        </p>
      </div>
    </div>
  );
};

Clima.propTypes = {
  resultado: PropTypes.object.isRequired,
};

export default Clima;
