import React from "react";
import Article from "./Article";
import LatestArticle from "./LatestArticle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRss } from "@fortawesome/free-solid-svg-icons";

const Articles = ({ loading, articles, title, latest }) => {
    return (
        <>
        {
            loading ? (
                "Loading..."
            ) : (
                <>
                <div className="category_title">{title}</div>

                <div className="article_grid">
                    {articles.map((article) => (
                        <Article key={article._id} article={article} />
                    ))}
                </div>

                <div className="latest">
                    <div className="latest_head">
                        <FontAwesomeIcon icon={faRss} className="licon"/>
                        <div className="latest_title">Latest news</div>
                    </div>
                    {latest.map((article) => (
                        <LatestArticle key={article.url} article={article} />
                    ))}
                </div>
                </>
            )
        }
        </>
    )
}

export default Articles