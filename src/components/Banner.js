import React from "react";

const Banner = () => {
    const removeBanner = () => {
        const banner = document.querySelector(".banner");
        banner.classList.add("hidden");
    }

    return (
        <div className="banner">
            <h1 className="banner_text1">Make MyNews your homepage</h1>
            <h2 className="banner_text2">Every day discover what's trending on the Internet!</h2>
            <div className="banner_buttons">
                <button onClick={removeBanner} className="get">GET</button>
                <button onClick={removeBanner} className="nothanks">No, thanks</button>
            </div>
        </div>
    )
}

export default Banner;