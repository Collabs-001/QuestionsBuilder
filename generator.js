import OpenAI from 'openai';

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

const basePrompt = `
{
  "Topic": "[List of topics]",
  "Difficulty": "[Specify the difficulty level]",
  "Comment": "For each topic, provide the following:",
  "Questions": [
    {
      "Number": 1,
      "Question": "[Enter the question related to the topic]",
      "Options": [
        "1: [Input and expected output]",
        "2: [Input and expected output]",
        "3: [Input and expected output]",
        "4: [Input and expected output]"
      ],
      "CorrectAnswer": "[Provide the correct answer to the question]"
    },
    {
      "Number": 2,
      "Question": "[Enter the question related to the topic]",
      "Options": [
        "1: [Input and expected output]",
        "2: [Input and expected output]",
        "3: [Input and expected output]",
        "4: [Input and expected output]"
      ],
      "CorrectAnswer": "[Provide the correct answer to the question]"
    },
    {
      "Number": 3,
      "Question": "[Enter the question related to the topic]",
      "Options": [
        "1: [Input and expected output]",
        "2: [Input and expected output]",
        "3: [Input and expected output]",
        "4: [Input and expected output]"
      ],
      "CorrectAnswer": "[Provide the correct answer to the question]"
    },
    {
      "Number": 4,
      "Question": "[Enter the question related to the topic]",
      "Options": [
        "1: [Input and expected output]",
        "2: [Input and expected output]",
        "3: [Input and expected output]",
        "4: [Input and expected output]"
      ],
      "CorrectAnswer": "[Provide the correct answer to the question]"
    },
    {
      "Number": 5,
      "Question": "[Enter the question related to the topic]",
      "Options": [
        "1: [Input and expected output]",
        "2: [Input and expected output]",
        "3: [Input and expected output]",
        "4: [Input and expected output]"
      ],
      "CorrectAnswer": "[Provide the correct answer to the question]"
    }
  ],
  "FAQs": {
    "1": {
      "Question": "[Enter a frequently asked question related to the topic]",
      "Answer": "[Provide the answer to the FAQ]"
    },
    "2": {
      "Question": "[Enter a frequently asked question related to the topic]",
      "Answer": "[Provide the answer to the FAQ]"
    },
    "3": {
      "Question": "[Enter a frequently asked question related to the topic]",
      "Answer": "[Provide the answer to the FAQ]"
    },
    "4": {
      "Question": "[Enter a frequently asked question related to the topic]",
      "Answer": "[Provide the answer to the FAQ]"
    },
    "5": {
      "Question": "[Enter a frequently asked question related to the topic]",
      "Answer": "[Provide the answer to the FAQ]"
    }
  },
  "comment": "[Repeat the above sections for each topic, give me 5 questions and 5 FAQ's, questions can have code and in the same JSON format]"
}`;

export async function generateQuestions(userInput) {
    try {
        const chatCompletion = await openai.chat.completions.create({
            messages: [
                { role: "system", content: basePrompt },
                { role: "user", content: `User Input: ${userInput}` }
            ],
            model: "gpt-3.5-turbo",
        });

        return chatCompletion.choices[0].message.content;

    } catch (error) {
        console.error("Error:", error);
    }
}