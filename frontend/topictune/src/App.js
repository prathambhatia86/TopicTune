import React from 'react'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import './App.css';
import Home from './components/Home';
import TopStories from './components/TopStories';
const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
	}, {
		path: "/TopStories",
		element: <TopStories />,
	}
]);
function App() {
	return (
		<div className="App">
			<header className="App-header">
				<RouterProvider router={router} />
			</header>
		</div>
	);
}

export default App;
