//Libraries
const express = require("express")
const app = express()
app.use(express.json({ limit: "50mb" }))

//Controllers
const newsController = require("./controllers/newsAPI");


//Constants
let source = []
newsController.fetchSources().then((response) => {
    source = response;
})
const category = newsController.fetchCategories();

app.post('/getNews', (req, res, next) => {
    if (req.body.sources.length === 0) {
        console.log(source);
        for (var key in source) {
            req.body.sources.push(source[key]);
        }
    }
    if (req.body.categories.length === 0) req.body.categories = category;
    next();
}, newsController.fetchNews);
app.get('/getCategories', (req, res) => {
    res.sendStatus(200).json(categories);
});
app.get('/getSources', (req, res) => {
    res.sendStatus(200).json(sources);
});

//Start the server on port 5000
const port = 5000;
const server = app.listen(port);
module.exports = {
    server
};