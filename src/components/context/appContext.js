import { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext(null);
export const useAppContext = () => {
    const context = useContext(AppContext);

    if(context === undefined){
        throw new Error("App Context must be within AppContextProvider");
    }

    return context;
}

const AppContextProvider = ({children}) => {
    const [bookmarked, setBookmarked] = useState([]);
    const [mobile, setMobile] = useState(window.innerWidth <= 500);
    const [mobIndex, setMobIndex] = useState(0);
    const [menuOpened, setMenuOpened] = useState(false);


    //Store bookmarked articles in local storage
    useEffect(() => {
        const getBookmarks = JSON.parse(localStorage.getItem("bookmarks"));
        if (getBookmarks) setBookmarked(getBookmarks);
    }, [])

    useEffect(() => {
        if(bookmarked?.length){
            localStorage.setItem("bookmarks", JSON.stringify(bookmarked));
        } else{ 
            localStorage.clear();
        }
    }, [bookmarked])


    const addToBookmarked = (article) => {
        const oldBookmarked = [...bookmarked];
        const newBookmarked = oldBookmarked.concat(article);

        setBookmarked(newBookmarked);
    }

    const removeFromBookmarked = (id) => {
        const oldBookmarked = [...bookmarked];
        const newBookmarked = oldBookmarked.filter((article) => article._id !== id);

        setBookmarked(newBookmarked);
    }

    //determines desktop/mobile version
    const handleWindowSizeChange = () => {
        setMobile(window.innerWidth <= 500);
    }

    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);


    const toggleFeaturedLatest = (currentPage, index) => {
        setMobIndex(index);
        const articleGridSmall = document.querySelector(".article_grid_small");
        const articleGridBig = document.querySelector(".article_grid_big");
        const latestWidget = document.querySelector(".latest_widget");
        
        if(currentPage === "latest") {
            articleGridSmall.style.display = "flex";
            articleGridBig.style.display = "flex";
            latestWidget.style.display = "none";
        } else {
            articleGridSmall.style.display = "none";
            articleGridBig.style.display = "none";
            latestWidget.style.display = "flex";
        }
    }

    const handleMenu = (current, articles, index) => {
        if(current === "menu"){
            setMenuOpened(false);
        } else setMenuOpened(true);
        
        const featuredLatest = document.querySelector(".mobile_menu");
        const newsContainer = document.querySelector(".news_container");
        const noArticles = document.querySelector(".no_articles");
        const menu = document.querySelector(".menu");

        if(!menuOpened){
            menu.style.display = "grid";
            if(index === 7) {
                if(articles.length > 0) {
                    newsContainer.style.display = "none";
                    featuredLatest.style.display = "none";
                } else {
                    noArticles.style.display = "none";
                }
            } else {
                newsContainer.style.display = "none";
                featuredLatest.style.display = "none";
            }
        } else {         
            menu.style.display = "none";
            if(index === 7) {
                if(articles.length > 0) {
                    newsContainer.style.display = "flex";
                    featuredLatest.style.display = "flex";
                } else {
                    noArticles.style.display = "flex";
                }
            } else {
                newsContainer.style.display = "flex";
                featuredLatest.style.display = "flex";
            }
        }
    }


    return(
        <AppContext.Provider value={{bookmarked, addToBookmarked, removeFromBookmarked, mobile, mobIndex, menuOpened, toggleFeaturedLatest, handleMenu}}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider;