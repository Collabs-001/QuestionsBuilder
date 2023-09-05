import OpenAI from 'openai';
// import meta.env;

const openai = new OpenAI({
	apiKey: import.meta.env.VITE_OPENAI_API_KEY,
	dangerouslyAllowBrowser: true,
});

function generateQuestionsJSON(questionsCount) {
	const questions = [];

	for (let i = 1; i <= questionsCount; i++) {
		const question = {
			number: i,
			question: '[Enter the question related to the topic]',
			options: [
				'1: [Input and expected output]',
				'2: [Input and expected output]',
				'3: [Input and expected output]',
				'4: [Input and expected output]',
			],
			answer: '[Provide the correct answer to the question]',
		};

		questions.push(question);
	}

	return questions;
}

function generateFAQsJSON(faqsCount) {
	const faqs = {};

	for (let i = 1; i <= faqsCount; i++) {
		faqs[i.toString()] = {
			question: '[Enter a frequently asked question related to the topic]',
			answer: '[Provide the answer to the FAQ]',
		};
	}

	return faqs;
}

export async function generateQuestions(
	userInput = 'frontend',
	questionsCount = 1,
	faqsCount = 1
) {
	try {
		const dynamicQuestions = generateQuestionsJSON(questionsCount);
		const dynamicFAQs = generateFAQsJSON(faqsCount);

		const basePrompt = `
        {
          "topics": "[List of topics]",
          "difficulty": "[Specify the difficulty level]",
          "comment": "For each topic, provide the following:",
          "questions": ${JSON.stringify(dynamicQuestions, null, 2)},
          "faqs": ${JSON.stringify(dynamicFAQs, null, 2)},
          "comment": "[Repeat the above sections for each topic, give me ${questionsCount} questions and ${faqsCount} FAQ's, questions can have code and in the same JSON format, DO NOT UPDATE THE JSON KEYS, ONLY UPDATE THE VALUES]"
        }`;

		const chatCompletion = await openai.chat.completions.create({
			messages: [
				{ role: 'system', content: basePrompt },
				{ role: 'user', content: `User Input: ${userInput}` },
			],
			model: 'gpt-3.5-turbo',
		});

		return chatCompletion.choices[0].message.content;
	} catch (error) {
		console.error('Error:', error);
	}
}
