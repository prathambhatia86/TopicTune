//Libraries
const express = require("express")
const app = express()
const cors=require("cors")
app.use(cors())
app.use(express.json({ limit: "50mb" }))

//Controllers
const newsController = require("./controllers/newsAPI");
async function query(data) {
	const response = await fetch(
		"https://api-inference.huggingface.co/models/google/flan-t5-base",
		{
			headers: { Authorization: "Bearer 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" },
			method: "POST",
			body: JSON.stringify(data),
		}
	);
	const result = await response.json();
	return result;
}

query({"inputs": "respond yes if the text contains information which seems to talk about israel palestine war then respond yes.\nText: Israel is bombing palestine"}).then((response) => {
	console.log(JSON.stringify(response));
});
//Constants
let source = []
newsController.fetchSources().then((response) => {
    source = response;
})
const category = newsController.fetchCategories();


app.post('/getNews', (req, res, next) => {
    if (req.body.sources.length === 0) {
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