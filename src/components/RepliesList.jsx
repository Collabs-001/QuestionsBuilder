import repliesListStyles from './RepliesList.module.css';

function RepliesList({ repliesList }) {
	const currentDate = new Date();

	const options = {
		timeZone: 'Asia/Kolkata',
		weekday: 'short',
		hour: '2-digit',
		minute: '2-digit',
		second: '2-digit',
	};

	const istDateTime = currentDate.toLocaleString('en-US', options);
	return (
		<div className="mx-5 text-justify max-w-2xl  rounded-md">
			{repliesList?.map((reply, index) => (
				<div
					key={index}
					className="mx-5 text-justify max-w-2xl p-8 rounded-md ${repliesListStyles.repliesTxt"
				>
					<div className="mb-5 font-bold">
						Q{index + 1}: {reply?.question}
					</div>
					<div className={`${repliesListStyles.options}`}>
						<ul>
							{reply.options.map((option, optionIndex) => (
								<li key={optionIndex}>{option?.replace(':', '.')}</li>
							))}
						</ul>
					</div>
					<p className="mt-3 font-bold">
						Correct answer: {reply?.answer.replace(':', '.')}
					</p>
				</div>
			))}
			<p className="text-right mt-2 mr-5">{istDateTime}</p>
		</div>
	);
}

export { RepliesList };
