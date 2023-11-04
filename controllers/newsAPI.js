const path = require("path");
const NewsAPI = require('newsapi');
require('dotenv').config({ path: path.resolve(__dirname, "../.env") });

const newsapi = new NewsAPI(process.env.API_KEY);
async function query(data) {
    const response = await fetch(
        "https://api-inference.huggingface.co/models/google/flan-t5-base",
        {
            headers: {
                Authorization: "Bearer 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"
            },
            method: "POST",
            body: JSON.stringify(data),
        }
    );
    const result = await response.json();
    return result;
}
const fetchNews = (req, res) => {
    let restrictive_prompt = "respond yes else no If the text contains information which seems to talk about ";
    for (var val in req.body.restrictions) {
        restrictive_prompt = restrictive_prompt + req.body.restrictions[val] + " ";
    }
    restrictive_prompt = restrictive_prompt + ".";
    // Fetch top headlines from the newsapi
    newsapi.v2.topHeadlines({
        sources: req.body.sources.join(","),
        language: 'en',
        categories: req.body.categories.join(",")
    }).then(async response => {
        let articles = response.articles;
        let new_response = [];
        for (var val in articles) {
            let prompt = articles[val].description;
            final_prompt = restrictive_prompt + prompt;
            ans = await query({ "inputs": final_prompt });
            if (ans[0].generated_text == "no") {
                new_response.push(articles[val]);
            }
        }
        console.log("NEW REQ");
        if (req.body.restrictions.length) {
            res.status(200).json(new_response);
        }
        else
            res.status(200).json(response);
    });

}


const fetchCategories = async () => {
    response = await newsapi.v2.sources({
        category: '',
        language: 'en',
        country: ''
    });

    //Create and return a set containing all categories available in the API
    categories = new Set();
    for (var k of response.sources) {
        categories.add(k.category);
    }
    return Array.from(categories);
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