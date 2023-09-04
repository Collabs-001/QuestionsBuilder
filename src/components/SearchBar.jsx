// import * as React from 'react';
// import { top100Films } from '../data';

function SearchBar() {
	return (
		<div className="">
			<div className="container flex justify-center px-4 sm:px-6 lg:px-8">
				<div className="relative">
					<input
						type="text"
						className="mt-5 h-14 w-96 pr-8 pl-5 rounded z-0 focus:shadow focus:outline focus:outline-offset-2 focus:outline-2"
						placeholder="Search anything..."
					/>
					<div className="absolute top-9 right-5">
						<i className="fa-solid fa-magnifying-glass text-gray-400 z-20 hover:text-gray-500"></i>
					</div>
				</div>
			</div>
		</div>
	);
}

export { SearchBar };
