import React from "react";
import { Link } from "react-router-dom";
import { faHouse, faEarthAmericas, faPlane, faNotesMedical, faFlask, faFutbol, faDesktop, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Menu = ({handleCategoryChange, index}) => {
    return (
        <div className="menu">
            <Link to="/"  onClick={() => handleCategoryChange("", 0)}>
            <div className={index===0 ? "menu_item active" : "menu_item"}>
                <FontAwesomeIcon icon={faHouse} className={index===0 ? "icon active" : "icon"} />
                <p className={index===0 ? "active" : null}>Home</p>
            </div>
            </Link>
            <Link to="/world" onClick={() => handleCategoryChange("World", 1)}>
            <div className={index===1 ? "menu_item active" : "menu_item"}>
                <FontAwesomeIcon icon={faEarthAmericas} className={index===1 ? "icon active" : "icon"} />
                <p className={index===1 ? "active" : null}>World</p>
            </div>
            </Link>
            <Link to="/travel" onClick={() => handleCategoryChange("Travel", 2)}>
            <div className={index===2 ? "menu_item active" : "menu_item"}>
                <FontAwesomeIcon icon={faPlane} className={index===2 ? "icon active" : "icon"} />
                <p className={index===2 ? "active" : null}>Travel</p>
            </div>
            </Link>
            <Link to="/health" onClick={() => handleCategoryChange("Health", 3)}>
            <div className={index===3 ? "menu_item active" : "menu_item"}>
                <FontAwesomeIcon icon={faNotesMedical} className={index===3 ? "icon active" : "icon"} />
                <p className={index===3 ? "active" : null}>Health</p>
            </div>
            </Link>
            <Link to="/science" onClick={() => handleCategoryChange("Science", 4)}>
            <div className={index===4 ? "menu_item active" : "menu_item"}>
                <FontAwesomeIcon icon={faFlask} className={index===4 ? "icon active" : "icon"} />
                <p className={index===4 ? "active" : null}>Science</p>
            </div>
            </Link>
            <Link to="/sports" onClick={() => handleCategoryChange("Sports", 5)}>
            <div className={index===5 ? "menu_item active" : "menu_item"}>
                <FontAwesomeIcon icon={faFutbol} className={index===5 ? "icon active" : "icon"} />
                <p className={index===5 ? "active" : null}>Sports</p>
            </div>
            </Link>
            <Link to="/technology" onClick={() => handleCategoryChange("Technology", 6)}>
            <div className={index===6 ? "menu_item active" : "menu_item"}>
                <FontAwesomeIcon icon={faDesktop} className={index===6 ? "icon active" : "icon"} />
                <p className={index===6 ? "active" : null}>Technology</p>
            </div>
            </Link>
            <Link to="/favorites" onClick={() => handleCategoryChange("", 7)}>
            <div className={index===7 ? "menu_item active" : "menu_item"}>
                <FontAwesomeIcon icon={faStar} className={index===7 ? "icon active" : "icon"} />
                <p className={index===7 ? "active" : null}>Favorites</p>
            </div>
            </Link>
        </div>
    )
}

export default Menu;