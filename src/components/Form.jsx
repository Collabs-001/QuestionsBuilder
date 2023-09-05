import { useEffect, useState } from 'react';
import { Reply } from '.';
import { SearchBar } from './SearchBar';
import { generateQuestions } from '../../generator';

function Form({
	noOfFaqs,
	noOfQuestions,
	searchTopic,
	setFaqsCount,
	setSearchTopic,
	setQuestionsCount,
}) {
	const [chatGPTRes, setChatGPTRes] = useState({});

	function submitFormHandler(event) {
		event.preventDefault();
		// fetch('../../output.json')
		generateQuestions(searchTopic, noOfQuestions, noOfFaqs)
			.then((res) => {
				return res;
			})
			.then((data) => {
				console.log(data);
				setChatGPTRes(data);
			})
			.catch((err) => {
				console.error(err);
			});
	}

	useEffect(() => {
		console.log('CHANGED');
	}, [chatGPTRes]);

	function setSearchTopicHandler(event) {
		setSearchTopic(event.target.value);
	}

	return (
		<>
			<div className="flex justify-center flex-col md:flex-row gap-5">
				<SearchBar
					searchTopic={searchTopic}
					setSearchTopicHandler={setSearchTopicHandler}
				/>
				<input
					className="m-5 p-3 rounded"
					type="number"
					placeholder="FAQ's count "
					value={noOfFaqs}
					onChange={(e) => setFaqsCount(e.target.value)}
				/>
			</div>
			<div className="flex justify-center flex-col md:flex-row gap-5">
				<input
					className="m-5 p-3 rounded"
					type="number"
					placeholder="Questions count "
					value={noOfQuestions}
					onChange={(e) => setQuestionsCount(e.target.value)}
				/>
				<button
					type="submit"
					onClick={(e) => submitFormHandler(e)}
					className="p-5 m-5 rounded bg-green-500 font-bold text-lg"
				>
					Generate
				</button>
			</div>
			{Object.keys(chatGPTRes).length > 0 && <Reply repliesList={chatGPTRes} />}
		</>
	);
}

export { Form };
