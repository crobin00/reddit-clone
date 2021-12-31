import NavBar from '../components/NavBar';
import NewLinkPost from '../components/NewLinkPost';
import NewTextPost from '../components/NewTextPost';

const NewPost = ({ isLinkPost, setIsLinkPost }) => {
	const button = {
		selected: 'w-14 font-semibold h-6 bg-cyan-500 text-white text-lg',
		unselected: 'w-14 font-semibold h-5 bg-cyan-200 text-cyan-500 text-sm',
	};

	return (
		<div>
			<NavBar />
			<h3 className='m-3 text-2xl'>submit to reddit</h3>

			{/* Text or Link Buttons */}
			<div className='ml-6 mr-3 mt-3 flex items-end'>
				<button
					onClick={() => setIsLinkPost(true)}
					className={isLinkPost ? button.selected : button.unselected}
				>
					link
				</button>
				<button
					onClick={() => setIsLinkPost(false)}
					className={!isLinkPost ? button.selected : button.unselected}
				>
					text
				</button>
			</div>
			<div className='max-w-xl ml-3 mb-3 mr-3 bg-cyan-500 h-1'></div>

			{/* Type of post information */}
			<p className='max-w-xl bg-amber-200 m-3 p-1 text-base font-medium border border-solid border-amber-500'>
				{isLinkPost
					? 'You are submitting a link. The key to a successful submission is interesting content and a descriptive title.'
					: 'You are submitting a text-based post. Speak your mind. A title is required, but expanding further in the text field is not. Beginning your title with "vote up if" is violation of intergalactic law.'}
			</p>

			{/* Post information */}
			{isLinkPost ? <NewLinkPost /> : <NewTextPost />}
			<div className='m-3 text-xs'>
				<span>*</span>
				<span>required</span>
			</div>

			{/* Submit */}
			<div>
				<button className='bg-gray-200 mx-3 p-2 rounded border border-solid border-gray-600 hover:bg-gray-300'>
					submit
				</button>
			</div>
		</div>
	);
};

export default NewPost;
