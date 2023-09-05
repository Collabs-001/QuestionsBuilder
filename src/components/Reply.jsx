import mockData from "../../output.json";
import Faq from "react-faq-component";
import { RepliesList } from "./index";

function Reply() {
  console.log(mockData);
	const data = {
		title: "Frequently Asked Questions",
		rows: [],
	};
	
	for (const key in mockData.faqs) {
		if (mockData.faqs.hasOwnProperty(key)) {
			const faq = mockData.faqs[key];
			const row = {
				title: faq.question,
				content: faq.answer,
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
        <div class="mx-5 text-justify max-w-2xl p-8 rounded-md _repliesTxt_pbitv_1">
          <Faq data={data} styles={styles} config={config} />
        </div>
      </div>
    </section>
  );
}

export { Reply };
