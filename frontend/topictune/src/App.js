import React, { useState, useEffect } from 'react'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import './App.css';
import Home from './components/Home';
function App() {
	const [source, changeSource] = useState({});
	const [category, changeCategory] = useState([]);
	useEffect(() => {
		fetch("http://localhost:5000/getSources").then((response) => {
			console.log(response);
			changeSource(response);
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
			</div>
		</div>
	);
}

export default App;
