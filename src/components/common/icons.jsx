import React from "react";

import PropTypes from "prop-types";
import Icons from "../../assets/images/icons.svg"

const Icon = ({ name, color, size }) => {
  return (
    <svg
    //   className={`icon icon-${name}`}
      fill={color}
      width={size}
      height={size}
    >
      <use xlinkHref='logo-svgrepo-com' />
    </svg>
  );
};

Icons.PropTypes = {
    name: PropTypes.string.isRequired,
    color: PropTypes.string,
    size: PropTypes.number
}

export default Icon;
