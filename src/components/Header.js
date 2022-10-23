import React from "react";
import Search from "./Search";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { useAppContext } from "./context/appContext";

const Header = ({searchArticles, articles, index}) => {

    const { mobIndex, menuOpened, handleMenu, toggleFeaturedLatest } = useAppContext();
    
    return (
        <div className="header">
            <div className="header_top">
                <div className="logo">
                    <h1 className="logo_1">My</h1>
                    <h1 className="logo_2">News</h1>
                </div>
                {
                    menuOpened ? <FontAwesomeIcon onClick={() => handleMenu("menu", articles, index)} className="bars" icon={faX} />
                    : <FontAwesomeIcon onClick={() => handleMenu("news", articles, index)} className="bars" icon={faBars} />
                }
            </div>
            <Search searchArticles={searchArticles} />
            {
                index !== 7 ? (
                    <div className="mobile_menu">
                        <button onClick={() => toggleFeaturedLatest("latest", 0)} className={mobIndex===0 ? "mobtn active" : "mobtn"}>Featured</button>
                        <button onClick={() => toggleFeaturedLatest("featured", 1)} className={mobIndex===1 ? "mobtn active" : "mobtn"}>Latest</button>
                    </div>
                ) : (
                    <div></div>
                )
            }
        </div>
    )
}

export default Header;