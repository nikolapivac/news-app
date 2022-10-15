import React, {useState, useEffect } from "react";
import Articles from "./components/Articles";
import axios from "axios";
import Search from "./components/Search";

const App = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchArticles = async () => {
      setLoading(true);
      const res = await axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?&sort=newest&api-key=6iBICR8GSq0N3mNGtSD3GLIATG0gzYZ9`);
      setArticles(res.data.response.docs);

      setLoading(false);
    }

    fetchArticles();
  }, [])

  const searchArticles = async (term) => {
    setLoading(true);
    const res = await axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${term}&sort=newest&api-key=6iBICR8GSq0N3mNGtSD3GLIATG0gzYZ9`);
    setArticles(res.data.response.docs);

    setLoading(false);
  }

  return (
    <>
      <Search searchArticles={searchArticles} />
      <Articles loading={loading} articles={articles} />
    </>
  );
}

export default App;
