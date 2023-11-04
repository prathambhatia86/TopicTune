import React, { useState, useEffect } from 'react'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import './App.css';
import Home from './components/Home';
import TopStories from './components/TopStories';
import axios from "axios";
function App() {
	const [source, changeSource] = useState({});
	const [category, changeCategory] = useState([]);
	useEffect(() => {
		axios.get("http://localhost:5000/getSources").then((response) => {
			console.log(response);
			changeSource(response.data);
		})
	}, []);
	const router = createBrowserRouter([
		{
			path: "/",
			element: <Home source={source} changeSource={changeSource} category={category} changeCategory={changeCategory} />,
		}, {
			path: "/TopStories",
			element: <TopStories source={source} changeSource={changeSource} category={category} changeCategory={changeCategory} />,
		}
	]);
	return (
		<div className="App">
			<header className="App-header">
				<RouterProvider router={router} />
			</header>
		</div>
	);
}

export default App;
