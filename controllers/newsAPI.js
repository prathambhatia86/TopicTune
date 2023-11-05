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
    console.log(req.body.categories);
    let restrictive_prompt = "respond yes else no If the text contains information which seems to talk about one of these topics: ";
    for (var val of req.body.restrictions.current) {
        restrictive_prompt = restrictive_prompt + val.value + ",";
    }
    restrictive_prompt = restrictive_prompt + ".";
    // Fetch top headlines from the newsapi
    for(let k of req.body.all)
    {
        if(req.body.sources.indexOf(k.name)>=0){
            if(req.body.categories.indexOf(k.category)==-1){
                
                req.body.sources=req.body.sources.filter(item => item != k.name);
            }
        }
    }
    if(req.body.sources.length==0){
        res.status(200).json([]);
    }
    newsapi.v2.topHeadlines({
        sources: req.body.sources.join(","),
        language: 'en',
        categories: req.body.categories.join(",")
    }).then(async response => {
        let articles = response.articles;
        let new_response = [];
       
        for (var val of response.articles) {
            let prompt = val.description;
            final_prompt = restrictive_prompt + prompt;
            ans = await query({ "inputs": final_prompt });
            if (ans[0].generated_text == "no") {
                new_response.push(val);
            }
        }
        const final_response = { articles: new_response };
        console.log("NEW REQ");

        res.status(200).json(final_response);
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
const fetchAll = async () => {
    return (await newsapi.v2.sources({
        category: '',
        language: 'en',
        country: ''
    })).sources;

   
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
    fetchSources,
    fetchAll
}