import React from "react";
import Search from "./Search";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Header = ({searchArticles}) => {
    return (
        <div className="header">
            <div className="header_top">
                <div className="logo">
                    <h1 className="logo_1">My</h1>
                    <h1 className="logo_2">News</h1>
                </div>
                <FontAwesomeIcon className="bars" icon={faBars} />
            </div>
            <Search searchArticles={searchArticles} />
            <div className="mobile_menu">
                <button className="mobtn active">Featured</button>
                <button className="mobtn">Latest</button>
            </div>
        </div>
    )
}

export default Header;