const path = require("path");
const NewsAPI = require('newsapi');
require('dotenv').config({ path: path.resolve(__dirname, "../.env") });

const newsapi = new NewsAPI(process.env.API_KEY);

const fetchNews = (req, res) => {
    //Fetch top headlines from the newsapi
    newsapi.v2.topHeadlines({
        sources: req.body.sources.join(","),
        language: 'en',
        categories: req.body.sources.join(",")
    }).then(response => {
        res.status(200).json(response);
    });

}


const fetchCategories = () => {
    newsapi.v2.sources({
        category: '',
        language: 'en',
        country: ''
    }).then(response => {
        //Create and return a set containing all categories available in the API
        categories = new Set();
        for (var k of response.sources) {
            categories.add(k.category);
        }
        return Array.from(categories);
    });
}

const fetchSources = async () => {
    response = await newsapi.v2.sources({
        category: '',
        language: 'en',
        country: ''
    })
    //Create and return a set containing all sources available in the API
    sources = {};
    for (var k of response.sources) {
        sources[k.name] = k.id;
    }
    return sources;
}


module.exports = {
    fetchNews,
    fetchCategories,
    fetchSources
}