import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NewPost from './pages/NewPost';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/newpost' element={<NewPost />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
