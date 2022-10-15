import React from "react";

const Article = ({article}) => {
    return (
        <div className="card">
            <img src={article.multimedia?.[0]?.url ? 
            `https://nytimes.com/${article.multimedia[0].url}` :
            'https://upload.wikimedia.org/wikipedia/commons/4/40/New_York_Times_logo_variation.jpg'} alt="news_img"/>
            <div className="card_info">
                <p className="category">{article.section_name}</p>
                <h1 className="title">{article.headline.main}</h1>
                <p className="author">{article.byline.original}</p>
            </div>
        </div>
    )
}

export default Article;