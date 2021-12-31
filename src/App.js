import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NewPost from './pages/NewPost';
import { useState } from 'react';

function App() {
	const [isLinkPost, setIsLinkPost] = useState(true);

	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Home setIsLinkPost={setIsLinkPost} />} />
				<Route
					path='/newpost'
					element={
						<NewPost isLinkPost={isLinkPost} setIsLinkPost={setIsLinkPost} />
					}
				/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
