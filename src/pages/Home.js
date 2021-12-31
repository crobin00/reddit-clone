import NavBar from '../components/NavBar';
import Post from '../components/Post';
import SearchAndNewPost from '../components/SearchAndNewPost';

const Home = ({ setIsLinkPost }) => {
	return (
		<div>
			<NavBar />
			<SearchAndNewPost setIsLinkPost={setIsLinkPost} />
			<Post />
			<Post />
		</div>
	);
};

export default Home;
