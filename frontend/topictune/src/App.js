import React, { useState, useEffect } from 'react'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import './App.css';
import Home from './components/Home';
import axios from "axios";
import CardGrid from './components/CardGrid';
function App() {
	const [source, changeSource] = useState({});
	const [category, changeCategory] = useState([]);

	useEffect(() => {
		axios.get("http://localhost:5000/getSources").then((response) => {
			changeSource(response.data);
		})
	}, []);
	useEffect(() => {
		axios.get("http://localhost:5000/getCategories").then((response) => {
			console.log(response);
			changeCategory(response.data);
		})
	}, []);
	const router = createBrowserRouter([
		{
			path: "/",
			element: <Home source={source} changeSource={changeSource} category={category} changeCategory={changeCategory} />,
		},
	]);
	return (
		<div className="App">
			<div className="App-header">
				<RouterProvider router={router} />
				<div>
					{category.length && <CardGrid source={source} category={category} />}
				</div>
			</div>
		</div>
	);
}

export default App;
