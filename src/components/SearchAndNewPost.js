import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const SearchAndNewPost = ({ setIsLinkPost }) => {
	const navigate = useNavigate();

	function onNewLink() {
		setIsLinkPost(true);
		navigate('/newpost');
	}

	function onNewText() {
		setIsLinkPost(false);
		navigate('/newpost');
	}

	return (
		<div className='w-80 m-3 float-right'>
			{/* Search bar */}
			<div className='w-full h-8 border border-solid border-gray-500 focus-within:outline focus-within:outline-2 focus-within:outline-blue-600 focus-within:rounded-sm'>
				<form className='cursor-text flex items-center h-full'>
					<input
						className='text-gray-400 flex-grow font-semibold w-full h-full pl-3 focus:outline-none'
						type='text'
						name='search'
						placeholder='search'
					/>
					<div>
						<FaSearch className='text-gray-400 w-full pr-3 cursor-pointer' />
					</div>
				</form>
			</div>

			{/* New Link/Photo Post */}
			<div className='h-8 my-3'>
				<button
					onClick={onNewLink}
					className='border border-solid border-cyan-500 w-full h-full bg-cyan-100 text-xl text-sky-700 font-bold'
				>
					Submit a new link
				</button>
			</div>

			{/* New Text Post */}
			<div>
				<button
					onClick={onNewText}
					className='border border-solid border-cyan-500 w-full h-full bg-cyan-100 text-xl text-sky-700 font-bold'
				>
					Submit a new text post
				</button>
			</div>
		</div>
	);
};

export default SearchAndNewPost;
