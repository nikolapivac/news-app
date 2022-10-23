import React, {useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useAppContext } from "./components/context/appContext";
import axios from "axios";
import Banner from "./components/Banner";
import Menu from "./components/Menu";
import Articles from "./components/Articles";
import Header from "./components/Header";
import "./scss/App.scss";


const App = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState("");
  const [index, setIndex] = useState(0);

  const { bookmarked, mobile, toggleFeaturedLatest, handleMenu } = useAppContext();

  useEffect(() => {
    const fetchArticles = async () => {
      setLoading(true);
      let url;
      if (category === "") {
        url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?&sort=newest&api-key=6iBICR8GSq0N3mNGtSD3GLIATG0gzYZ9`;
      } else url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=section_name:${category}&sort=newest&api-key=6iBICR8GSq0N3mNGtSD3GLIATG0gzYZ9`

      const res = await axios.get(url);
      setArticles(res.data.response.docs);
      setLoading(false);
    }

    fetchArticles();
  }, [category])
  
  const handleCategoryChange = (categoryName, i) => {
    setCategory(categoryName);
    setIndex(i);
    if(mobile){
      toggleFeaturedLatest("latest", 0);
      handleMenu("menu");
    }
  }

  //Search 
  const searchArticles = async (term) => {
    setLoading(true);
    let url;
    if (category === "") {
      url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${term}&sort=newest&api-key=6iBICR8GSq0N3mNGtSD3GLIATG0gzYZ9`;
    } else url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=section_name:${category}&q=${term}&sort=newest&api-key=6iBICR8GSq0N3mNGtSD3GLIATG0gzYZ9`;

    const res = await axios.get(url);
    setArticles(res.data.response.docs);
    setLoading(false);
  }

  return (
    <BrowserRouter>
      <Banner />
      <Header searchArticles={searchArticles} articles={articles} index={index}/>
      <div className="main_container">
        <Menu handleCategoryChange={handleCategoryChange} index={index} />
        <Routes>
          <Route path="/" element={<Articles loading={loading} articles={articles} title={"News"}/>} />
          <Route path="/world" element={<Articles loading={loading} articles={articles} title={"World"}/>} />
          <Route path="/travel" element={<Articles loading={loading} articles={articles} title={"Travel"}/>} />
          <Route path="/health" element={<Articles loading={loading} articles={articles} title={"Health"}/>} />
          <Route path="/science" element={<Articles loading={loading} articles={articles} title={"Science"}/>} />
          <Route path="/sports" element={<Articles loading={loading} articles={articles} title={"Sports"}/>} />
          <Route path="/technology" element={<Articles loading={loading} articles={articles} title={"Technology"}/>} />
          <Route path="/favorites" element={<Articles loading={loading} articles={bookmarked} title={"Favorites"}/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
