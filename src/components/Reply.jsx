import mockData from '../../output.json';
import { RepliesList } from './index';

function Reply() {

	console.log(mockData);
	return (
		<section className="flex justify-center mt-10">
			<div>
				<RepliesList repliesList={mockData.questions} />
				{/* <div
					className={`mx-5 text-justify max-w-2xl p-8 rounded-md ${repliesStyles.repliesTxt}`}
				>
					1. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati
					deleniti rem vel quaerat eligendi exercitationem itaque corporis
					sapiente? Similique earum eius aperiam vitae culpa unde veritatis?
					Nihil similique iste dicta. Lorem ipsum dolor sit amet consectetur
					adipisicing elit. Suscipit molestias repellat aperiam exercitationem.
					Id eligendi a quidem. Recusandae eos praesentium repellat porro
					repellendus, explicabo totam, labore accusantium aut odit natus.
					<div>
						<ul className="mt-3">
							<li className="my-4 p-3 bg-blue-400 rounded">
								1. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
								Dolorem, tempore.
							</li>
							<li className="my-4 p-3 bg-blue-400 rounded">
								2. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
								Dolorem, tempore.
							</li>
							<li className="my-4 p-3 bg-blue-400 rounded">
								3. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
								Dolorem, tempore.
							</li>
							<li className="my-4 p-3 bg-blue-400 rounded">
								4. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
								Dolorem, tempore.
							</li>
						</ul>
					</div>
					<p className="mt-3 font-bold">Correct answer is: 1</p>
				</div>
				<p className="text-right mt-2 mr-5">{istDateTime}</p>
			</div> */}
			</div>
		</section>
	);
}

export { Reply };
