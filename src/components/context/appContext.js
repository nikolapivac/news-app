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

    return(
        <AppContext.Provider value={{bookmarked, addToBookmarked, removeFromBookmarked}}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider;