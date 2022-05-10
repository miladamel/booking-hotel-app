import React from "react";
import "./header.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed, faCar, faHotel, faPlane, faTaxi } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div className="header">
      <div className="headerList">
        <div className="headerListItem">
          <FontAwesomeIcon icon={faHotel} />
          <span>
              stays
          </span>
        </div>
        <div className="headerListItem">
            <FontAwesomeIcon icon={faCar} />
            <span>Car rental</span>
        </div>
        <div className="headerListItem">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
        </div>
        <div className="headerListItem">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport taxis</span>
        </div>
        <div className="headerListItem">
            <FontAwesomeIcon icon={faBed} />
            <span>Attractions</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
