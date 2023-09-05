// import mockData from '../../output.json';
import Faq from 'react-faq-component';
import { RepliesList } from './index';
import "./Reply.css";

function Reply({ repliesList }) {
	
	const data = {
		title: 'Frequently Asked Questions',
		rows: [],
	};

	for (const key in repliesList?.faqs) {
		if (repliesList?.faqs.hasOwnProperty(key)) {
			const faq = repliesList?.faqs[key];
			const row = {
				title: faq?.question,
				content: faq?.answer,
			};
			data.rows.push(row);
		}
	}

	const styles = {
		bgColor: '#a7f3d0',
		// titleTextColor: "blue",
		// rowTitleColor: "blue",
		// rowContentColor: 'grey',
		// arrowColor: "red",
	};

	const config = {
		// animate: true,
		// arrowIcon: "V",
		// tabFocus: true
	};

	return (
		<section className="flex justify-center mt-10">
			<div>
				{Object.keys(repliesList).length === 0 ? (
					<div>No result</div>
				) : (
					<div>
						<RepliesList repliesList={repliesList?.questions} />
						<div className="mx-5 text-justify max-w-2xl rounded-md">
							<Faq data={data} styles={styles} config={config} />
						</div>
					</div>
				)}
			</div>
		</section>
	);
}

export { Reply };
