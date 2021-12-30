const Post = () => {
	return (
		<div className='flex font-redditFont m-3'>
			{/* Number of post */}
			<div className='font-thin text-2xl text-gray-400 font-postNumberFont mr-3 mt-3'>
				<span>1</span>
			</div>

			{/* Posted image or Text Logo */}
			<div className='w-24 flex-shrink-0 mr-3 cursor-pointer'>
				<img src='https://via.placeholder.com/150' alt='' />
			</div>

			{/* Title and post information */}
			<div className='flex-grow'>
				<h3 className='text-2xl text-blue-700 cursor-pointer'>
					This is a test post this is a test post
				</h3>
				<p className='text-xs text-gray-400'>
					submitted 2 hours ago by TestUser123
				</p>
				<p className='text-xs font-bold text-gray-400 cursor-pointer hover:underline'>
					27 comments
				</p>
			</div>
		</div>
	);
};

export default Post;
