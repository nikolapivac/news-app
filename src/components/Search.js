import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"

const Search = ({ searchArticles }) => {
    const [term, setTerm] = useState("");

    const handleChange = (e) => {
        setTerm(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        searchArticles(term);
    };

    return (
        <div className="search">
            <FontAwesomeIcon icon={faMagnifyingGlass} className="search_icon"/>
            <input type="text" placeholder="Search news" value={term} onChange={handleChange} />
            <div className="btn_container">
                <button onClick={handleSubmit} type="submit">SEARCH</button>
            </div>
        </div>
    )


}

export default Search;