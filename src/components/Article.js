import React from "react";
import { useAppContext } from "./context/appContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Article = ({article}) => {

    const { bookmarked, addToBookmarked, removeFromBookmarked } = useAppContext();

    const isBookmarked = (id) => {
        const boolean = bookmarked.some((article) => article._id === id);
        return boolean;
    }

    return (
        <div className="card">
            <img src={article.multimedia?.[0]?.url ? 
            `https://nytimes.com/${article.multimedia[0].url}` :
            'https://upload.wikimedia.org/wikipedia/commons/4/40/New_York_Times_logo_variation.jpg'} alt="news_img"/>
            <div className="card_info">
                <p className="category">{article.section_name}</p>
                <h1 className="title">{article.headline.main}</h1>
                <div className="card_bottom">
                    <p className="author">{article.byline.original}</p>
                    {
                        isBookmarked(article._id) ? 
                        <button className="bookmark_btn" onClick={() => removeFromBookmarked(article._id)}><FontAwesomeIcon className="book-gold" icon={faStar} /></button>
                        : <button className="bookmark_btn" onClick={() => addToBookmarked(article)}><FontAwesomeIcon className="book-grey" icon={faStar} /></button>
                    }
                </div>
            </div>
        </div>
    )
}

export default Article;