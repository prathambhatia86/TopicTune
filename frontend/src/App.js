import React, { useEffect, useState } from 'react';
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import axios from 'axios';
// import NavBar from './components/layouts/NavBar';
import Articles from './Articles';
import TopStories from './TopStories';
// import Search from './Search';
import Search from '@material-ui/icons/Search';

// import Typography from "@material-ui/core/Typography";
// import Container from '@material-ui/core/Container';
import Container from '@mui/material/Container';

// import Link from '@material-ui/core/Link';
import Link from '@mui/material/Link';

// import Typography from '@mui/material/Typography';
import Typography from '@material-ui/core/Typography';
import BaseApp from './BaseApp';
import TopStoriCompo from './TopStoriCompo';


const router = createBrowserRouter([
  {
    path: "/",
    element:  <BaseApp/>,
  }, {
    path: "/TopStories",
    element: <TopStoriCompo/>,
  }
]);

const App = () => {
  const [loading, setLoading] = useState(false);
  const [articles, setArticles] = useState([]);
  const [topStories, setTopStories] = useState([]);

  useEffect(() => {
    const getArticles = async () => {
      setLoading(true);
      const res = await axios.get(` https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=section_name:("Arts")&sort=newest&api-key=${process.env.REACT_APP_NYTIMES_API_KEY}`);
      setArticles(res.data.response.docs);
      setLoading(false);
    };
    getArticles();
  }, []);

  const searchArticles = async (text) => {
    setLoading(true);
    const res = await axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${text}&api-key=${process.env.REACT_APP_NYTIMES_API_KEY}`);
    setArticles(res.data.response.docs);
    setLoading(false);
  };

  const getTopArticles = async (section) => {
    setLoading(true);
    const res = await axios.get(`https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=${process.env.REACT_APP_NYTIMES_API_KEY}`);
    setTopStories(res.data.results);
    setLoading(false);
  };


  return (
    <div>
      <Container>
        <Typography color="textPrimary" gutterBottom variant="h2" align="center">
        <RouterProvider router={router} />
        </Typography>
      </Container>
    </div>
  );
};

export default App;
