import repliesStyles from './Replies.module.css';

function Replies() {
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
		<section className="flex justify-center mt-10">
			<div>
				<p
					className={`mx-5 text-center max-w-2xl p-4 rounded-md ${repliesStyles.repliesTxt}`}
				>
					1. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati
					deleniti rem vel quaerat eligendi exercitationem itaque corporis
					sapiente? Similique earum eius aperiam vitae culpa unde veritatis?
					Nihil similique iste dicta. Lorem ipsum dolor sit amet consectetur
					adipisicing elit. Suscipit molestias repellat aperiam exercitationem.
					Id eligendi a quidem. Recusandae eos praesentium repellat porro
					repellendus, explicabo totam, labore accusantium aut odit natus.
				</p>
				<ul>
					<li>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem,
						tempore.
					</li>
					<li>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem,
						tempore.
					</li>
				</ul>
				<p className="text-right mt-2 mr-5">{istDateTime}</p>
			</div>
		</section>
	);
}

export { Replies };
