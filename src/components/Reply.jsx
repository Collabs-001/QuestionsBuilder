import React from 'react';
import Faq from 'react-faq-component';
import { RepliesList } from './index';

function Reply({ repliesList }) {
	const faqs = repliesList?.faqs || {};
	const data = {
		title: 'Frequently Asked Questions',
		rows: Object.keys(faqs).map((key) => ({
			title: faqs[key]?.question,
			content: faqs[key]?.answer,
		})),
	};

	const styles = {
		bgColor: 'white',
		titleTextColor: 'black',
		rowTitleColor: 'blue',
		rowContentColor: 'grey',
		arrowColor: 'blue',
	};

	const config = {
		animate: true,
		arrowIcon: 'V',
		tabFocus: true,
	};

	return (
		<section className="mt-10">
			<div className="container mx-auto px-4">
				<div className="flex flex-wrap -mx-4">
					<div className="w-full lg:w-1/2 px-4 mb-6">
						<RepliesList repliesList={repliesList?.questions} />
					</div>
					<div className="w-full lg:w-1/2 px-4">
						<div className="max-w-2xl mx-auto">
							<Faq data={data} styles={styles} config={config} />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export { Reply };
