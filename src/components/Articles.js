import React from "react";
import Article from "./Article";

const Articles = ({ loading, articles }) => {
    return (
        <>
        {
            loading ? (
                "Loading..."
            ) : (
                <div className="article_grid">
                    {articles.map((article) => (
                        <Article key={article._id} article={article} />
                    ))}
                </div>
            )
        }
        </>
    )
}

export default Articles