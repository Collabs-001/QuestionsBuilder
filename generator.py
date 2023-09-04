import os
import openai

base_prompt = """
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
}
"""

def generate_questions(user_input, base_prompt):
    # Concatenate user input to the base prompt
    prompt = f"{base_prompt}\nUser Input: {user_input}"

    # Read OpenAI API key from environment
    openai.api_key = os.environ.get('OPENAI_API_KEY')

    messages = [{"role": "system", "content": prompt}]

    chat = openai.ChatCompletion.create(
        model="gpt-3.5-turbo", messages=messages
    )
    reply = chat.choices[0].message.content

    return reply

response = generate_questions("frontend,fullstack", base_prompt)
with open("output.json", "w") as output:
    output.write(response)
