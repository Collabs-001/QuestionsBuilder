// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css';
import { SearchBar, Replies } from './components';

function App() {
	return (
		<main className='h-screen'>
			<SearchBar />
			<Replies />
		</main>
	);
}

export default App;
