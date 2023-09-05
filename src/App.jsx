import { useState } from 'react';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css';
import { Reply, Form } from './components';

function App() {
	let [noOfFaqs, setFaqsCount] = useState(undefined);
	let [searchTopic, setSearchTopic] = useState('');
	let [noOfQuestions, setQuestionsCount] = useState(undefined);

	return (
		<main className="">
			<Form
				noOfFaqs={noOfFaqs}
				noOfQuestions={noOfQuestions}
				searchTopic={searchTopic}
				setFaqsCount={setFaqsCount}
				setSearchTopic={setSearchTopic}
				setQuestionsCount={setQuestionsCount}
			/>
		</main>
	);
}

export default App;
