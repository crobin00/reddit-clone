const NewTextPost = () => {
	return (
		<div>
			{/* Title */}
			<div className='m-3 p-2 rounded max-w-xl bg-cyan-200 font-medium text-xl'>
				<span className='text-red-600'>*</span>
				<span className=''>title</span>
				<div className='w-full'>
					<textarea className='focus:outline-none w-full my-2' name='title' />
				</div>
			</div>

			{/* Text */}
			<div className='m-3 p-2 rounded max-w-xl bg-cyan-200 font-medium text-xl'>
				<span className='mr-1'>text</span>
				<span className='text-gray-400'>(optional)</span>
				<div className='w-full'>
					<textarea
						className='focus:outline-none w-full my-2'
						name='text'
						rows='4'
					/>
				</div>
			</div>
		</div>
	);
};

export default NewTextPost;
