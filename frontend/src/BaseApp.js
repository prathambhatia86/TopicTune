import React from 'react'
// import NavBar from './components/layouts/NavBar';
import Articles from './Articles';
// import Search from './Search';
import Search from '@material-ui/icons/Search';
// import Link from '@material-ui/core/Link';
import Link from '@mui/material/Link';
import { NavLink } from 'react-router-dom';
export default function BaseApp() {
    const searchArticles = async (text) => {
        setLoading(true);
        const res = await axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${text}&api-key=${process.env.REACT_APP_NYTIMES_API_KEY}`);
        setArticles(res.data.response.docs);
        setLoading(false);
      };
  return (
    <>
    <Search searchArticles={searchArticles} />
    <NavLink to="/TopStories">
      <Link component="button" variant="body2">Go to top stories in World, Tech and U.S</Link>
    </NavLink>
    <Articles loading={loading} articles={articles} />
  </>
  )
}
