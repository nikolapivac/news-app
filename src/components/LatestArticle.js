import React from "react";

const LatestArticle = ({article}) => {
    return(
        <div className="latest_article">
            <p>{article.publishedAt.slice(11, 16)}</p>
            <h1>{article.title}</h1>
        </div>
    )
} 

export default LatestArticle;