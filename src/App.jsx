import { useState } from 'react';
import './App.css';
import { Reply, Form } from './components';

function App() {
	const [noOfFaqs, setFaqsCount] = useState(undefined);
	const [searchTopic, setSearchTopic] = useState('');
	const [noOfQuestions, setQuestionsCount] = useState(undefined);

	return (
		<div className="min-h-screen flex flex-col justify-center items-center">
			<header className="mt-3 bg-blue-500 text-white py-4 px-8 rounded-lg shadow-md">
				<a className="text-2xl font-bold mt-3" href=".">
					Questions Builder
				</a>
			</header>
			<main className="mt-8">
				<Form
					noOfFaqs={noOfFaqs}
					noOfQuestions={noOfQuestions}
					searchTopic={searchTopic}
					setFaqsCount={setFaqsCount}
					setSearchTopic={setSearchTopic}
					setQuestionsCount={setQuestionsCount}
				/>
			</main>
		</div>
	);
}

export default App;
