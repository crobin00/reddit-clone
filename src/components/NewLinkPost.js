import React from 'react';

const NewLinkPost = () => {
	return (
		<div>
			{/* url */}
			<div className='m-3 p-2 rounded max-w-xl bg-cyan-200 font-medium text-xl'>
				<span className=''>url</span>
				<div className='w-full'>
					<input className='focus:outline-none w-full my-2' name='url' />
				</div>
			</div>

			{/* Image/video */}
			<div className='m-3 p-2 rounded max-w-xl bg-cyan-200 font-medium text-xl'>
				<span className='mr-1'>image/video</span>
				<div className='w-full'>
					<input
						className='my-2 text-cyan-500 text-lg file:bg-cyan-500 file:border-0 file:rounded-full file:p-2'
						type='file'
					/>
				</div>
			</div>

			{/* Title */}
			<div className='m-3 p-2 rounded max-w-xl bg-cyan-200 font-medium text-xl'>
				<span className='text-red-600'>*</span>
				<span className=''>title</span>
				<div className='w-full'>
					<textarea className='focus:outline-none w-full my-2' name='title' />
				</div>
			</div>
		</div>
	);
};

export default NewLinkPost;
