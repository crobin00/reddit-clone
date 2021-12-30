import { FaRedditAlien } from 'react-icons/fa';

const NavBar = () => {
	return (
		<div className='flex justify-between p-2 bg-cyan-200 border border-solid border-cyan-500 relative'>
			<div className='flex cursor-pointer'>
				<FaRedditAlien className='text-5xl' />
				<h1 className='font-varelaRound text-5xl ml-2'>reddit</h1>
			</div>
			<div className='flex justify-between items-center absolute bottom-0 right-0 bg-cyan-100 rounded-tl-lg w-1/3'>
				<span className='px-1'>Username</span>
				<span className='px-1 text-sm cursor-pointer'>login</span>
			</div>
		</div>
	);
};

export default NavBar;
