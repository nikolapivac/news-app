import React, { useState } from "react";

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
        <div>
            <input type="text" placeholder="Search news" value={term} onChange={handleChange} />
            <button onClick={handleSubmit} type="submit">Search</button>
        </div>
    )


}

export default Search;