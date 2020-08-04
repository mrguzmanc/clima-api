import React, { useState } from "react";
import Error from "./Error";
import { Fonts } from "../fonts/utils/constant";
import PropTypes from "prop-types";

const Formulario = ({ busqueda, guardarBusqueda, guardarConsultar }) => {
  const [error, guardarError] = useState(false);

  const { ciudad, pais } = busqueda;

  const handleChange = (e) => {
    guardarBusqueda({
      ...busqueda,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (ciudad.trim() === "" || pais.trim() === "") {
      guardarError(true);
      return;
    }

    guardarError(false);

    guardarConsultar(true);
  };

  return (
    <form onSubmit={handleSubmit}>
      {error ? <Error mensaje="Ambos campos son obligatorios" /> : null}
      <div className="input-field col s12">
        <input
          type="text"
          name="ciudad"
          id="ciudad"
          value={ciudad}
          onChange={handleChange}
        />
        <label htmlFor="ciudad">City:</label>
      </div>
      <div className="input-field col s12">
        <select
          name="pais"
          id="pais"
          value={pais}
          onChange={handleChange}
          className="select"
        >
          <option value="">--Select an option--</option>
          <option value="US">United States</option>
          <option value="MX">México</option>
          <option value="AR">Argentina</option>
          <option value="CO">Colombia</option>
          <option value="CR">Costa Rica</option>
          <option value="ES">Spain</option>
          <option value="PE">Perú</option>
        </select>
        <label htmlFor="pais">Country:</label>
        <div className="input-field col s12">
          <button
            type="submit"
            className="waves-effect waves-light btn-large btn-block yellow accent-4 col s12"
          >
            GO!
          </button>
        </div>
      </div>
      <style jsx="true">
        {`
          .waves-effect {
            font-family: ${Fonts.boldJosefin};
          }
          .select-dropdown {
            font-family: ${Fonts.normalJosefin};
          }
        `}
      </style>
    </form>
  );
};

Formulario.propTypes = {
  busqueda: PropTypes.object.isRequired,
  guardarBusqueda: PropTypes.func.isRequired,
  guardarConsultar: PropTypes.func.isRequired,
};

export default Formulario;
