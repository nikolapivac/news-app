import React from "react";

const Article = ({article}) => {
    return (
        <div className="article-card">
            <img src={article.multimedia?.[0]?.url ? 
            `https://nytimes.com/${article.multimedia[0].url}` :
            'https://upload.wikimedia.org/wikipedia/commons/4/40/New_York_Times_logo_variation.jpg'} alt="news_img"/>
            <div className="article_info">
                <p className="article_info_category">{article.section_name}</p>
                <h1 className="article_info_title">{article.headline.main}</h1>
                <p className="article_info_author">{article.byline.original}</p>
            </div>
        </div>
    )
}

export default Article;