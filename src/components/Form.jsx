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
	const [loading, setLoading] = useState(false); // Add a loading state

	function submitFormHandler(event) {
		event.preventDefault();
		setLoading(true); // Start loading

		generateQuestions(searchTopic, noOfQuestions, noOfFaqs)
			.then((data) => {
				// console.log(data);
				setChatGPTRes(JSON.parse(data));
			})
			.catch((err) => {
				console.error(err);
			})
			.finally(() => {
				setLoading(false); // Stop loading, whether the request succeeds or fails
			});
	}

	useEffect(() => {
		// console.log(chatGPTRes.type);
		// console.log(chatGPTRes);
	}, [chatGPTRes]);

	function setSearchTopicHandler(event) {
		setSearchTopic(event.target.value);
	}

	return (
		<>
			<div className="flex justify-center flex-col md:flex-row gap-1 mx-24">
				<SearchBar
					searchTopic={searchTopic}
					setSearchTopicHandler={setSearchTopicHandler}
				/>
				<input
					className="m-5 p-3 rounded"
					type="number"
					placeholder="FAQ's count"
					value={noOfFaqs}
					onChange={(e) => setFaqsCount(e.target.value)}
				/>
				<input
					className="m-5 p-3 rounded"
					type="number"
					placeholder="Questions count"
					value={noOfQuestions}
					onChange={(e) => setQuestionsCount(e.target.value)}
				/>
				<button
					type="submit"
					onClick={(e) => submitFormHandler(e)}
					className={`p-5 m-5 rounded bg-green-500 font-bold text-lg ${
						loading ? 'opacity-50 cursor-not-allowed' : ''
					}`}
					disabled={loading} // Disable the button when loading is true
				>
					{loading ? 'Generating...' : 'Generate'}
				</button>
			</div>
			{!loading && Object.keys(chatGPTRes).length === 0 && (
				<div className="text-center mt-5 font-bold text-2xl flex justify-center items-center">No result</div>
			)}
			{!loading && Object.keys(chatGPTRes).length > 0 && (
				<Reply repliesList={chatGPTRes} />
			)}
		</>
	);
}

export { Form };
