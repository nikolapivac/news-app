import React from "react";
import Article from "./Article";
import Latest from "./Latest";

const Articles = ({ loading, articles, title }) => {
    return (
        <>
        {
            loading ? (
                "Loading..."
            ) : (
                <div className="news_container">
                    {loading ? "" : <div className="category_title">{title}</div>}
                    <div className="main">
                        <div className="main_top">
                            <div className="article_grid_small">
                                {articles.slice(0, 4).map((article) => (
                                    <Article key={article._id} article={article} />
                                ))}
                            </div>
                            <Latest />
                        </div>
                        <div className="article_grid_big">
                            {articles.slice(4, 10).map((article) => (
                                <Article key={article._id} article={article} />
                            ))}
                        </div>
                    </div>
                </div>
            )
        }
        </>
    )
}

export default Articles