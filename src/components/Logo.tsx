import React from "react";

function Logo() {
  return (
    <a href="#welcome" className="active">
      <svg className="Header_logo___uT0U" viewBox="0 0 88 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip2_24)">
          <path
            id="Shape"
            d="M44 3.125L3.14285 26.0417L3.14285 72.9167L44 96.875L84.8571 73.9583L84.8571 27.0833L44 3.125Z"
            fill="#000000"
            fillOpacity="1"
            fillRule="nonzero"
          ></path>
          <path
            id="Shape"
            d="M3.14285 26.0417L3.14285 72.9167L44 96.875L84.8571 73.9583L84.8571 27.0833L44 3.125L3.14285 26.0417Z"
            stroke="currentColor"
            strokeOpacity="1"
            strokeWidth="5"
            strokeLinejoin="round"
          ></path>
          <path
            id="Y"
            d="M32.5 32H38.5L44 43.5L49.5 32H55.5L47 49V67H41V49L32.5 32Z"
            fill="currentColor"
            fillOpacity="1"
            fillRule="evenodd"
          ></path>
        </g>
      </svg>
      <div className="Header_hex_container__h584r">
        <svg id="hex" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 84 96">
          <title>Hexagon</title>
          <g transform="translate(-8.000000, -2.000000)">
            <g transform="translate(11.000000, 5.000000)">
              <polygon
                stroke="currentColor"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
                points="39 0 0 22 0 67 39 90 78 68 78 23"
                fill="currentColor"
              ></polygon>
            </g>
          </g>
        </svg>
      </div>
    </a>
  );
}

export default Logo;
