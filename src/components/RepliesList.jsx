import repliesListStyles from './RepliesList.module.css';

function RepliesList({ repliesList }) {
	// Create a new Date object
	const currentDate = new Date();

	// Define options for formatting
	const options = {
		timeZone: 'Asia/Kolkata', // Set the time zone to IST
		weekday: 'short', // Display abbreviated day name (e.g., "Mon," "Tue")
		hour: '2-digit', // Display hours in 2-digit format
		minute: '2-digit', // Display minutes in 2-digit format
		second: '2-digit', // Display seconds in 2-digit format
	};

	// Format the date and time
    const istDateTime = currentDate.toLocaleString('en-US', options);
	return (
		<div
			className={`mx-5 text-justify max-w-2xl p-8 rounded-md ${repliesListStyles.repliesTxt}`}
		>
			{repliesList.map((reply, index) => (
				<div
					key={index}
					className={`mx-5 text-justify max-w-2xl p-8 rounded-md ${repliesListStyles.repliesTxt}`}
				>
					<div>
						{index + 1}. {reply.question}
					</div>
					<div>
						<ul>
							{reply.options.map((option, optionIndex) => (
								<li key={optionIndex}>{option}</li>
							))}
						</ul>
					</div>
					<p className="mt-3 font-bold">Correct answer is: {reply.answer}</p>
				</div>
			))}
			<p className="text-right mt-2 mr-5">{istDateTime}</p>
		</div>
	);
}

export { RepliesList };
