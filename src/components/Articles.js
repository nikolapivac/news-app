import React from "react";
import Article from "./Article";
import Latest from "./Latest";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner, faNewspaper } from "@fortawesome/free-solid-svg-icons";

const Articles = ({ loading, articles, title }) => {

    return (
        <>
        {
            loading ? (
                <div className="loading">
                    <FontAwesomeIcon icon={faSpinner} className="spinner"/>
                    <h1>Loading...</h1>
                </div>
            ) : (
                articles.length > 0 ? (
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
                ) : (
                    <div className="no_articles">
                        <FontAwesomeIcon icon={faNewspaper} className="newspaper"/>
                        <h1>There's nothing here!</h1>
                    </div>
                )
            )
        }
        </>
    )
}

export default Articles