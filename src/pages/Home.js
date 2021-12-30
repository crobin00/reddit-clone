import NavBar from '../components/NavBar';
import Post from '../components/Post';
import SearchAndNewPost from '../components/SearchAndNewPost';

const Home = () => {
	return (
		<div>
			<NavBar />
			<SearchAndNewPost />
			<Post />
			<Post />
		</div>
	);
};

export default Home;
