import React from "react";
import Search from "./Search";

const Header = ({searchArticles}) => {
    return (
        <div className="header">
            <div className="logo">
                <h1 className="logo_1">My</h1>
                <h1 className="logo_2">News</h1>
            </div>
            <Search searchArticles={searchArticles} />
        </div>
    )
}

export default Header;