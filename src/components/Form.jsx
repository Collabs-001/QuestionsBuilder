import { useEffect, useState } from "react";
import { Reply } from ".";
import { SearchBar } from "./SearchBar";
import { generateQuestions } from "../../generator";

function Form({
  noOfFaqs,
  noOfQuestions,
  searchTopic,
  setFaqsCount,
  setSearchTopic,
  setQuestionsCount,
}) {
  const [chatGPTRes, setChatGPTRes] = useState(null); // Set initial state to null
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  function submitFormHandler(event) {
    event.preventDefault();
    setLoading(true);
    setError(false);

    generateQuestions(searchTopic, noOfQuestions, noOfFaqs)
      .then((data) => {
        setChatGPTRes(JSON.parse(data));
      })
      .catch((err) => {
        console.error(err);
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  useEffect(() => {
    // console.log(chatGPTRes.type);
    // console.log(chatGPTRes);
  }, [chatGPTRes]);

  function setSearchTopicHandler(event) {
    setSearchTopic(event.target.value);
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex flex-col md:flex-row gap-4">
        <SearchBar
          searchTopic={searchTopic}
          setSearchTopicHandler={setSearchTopicHandler}
        />
        <input
          className="flex-1 p-3 rounded-md border focus:outline-none focus:border-blue-500"
          type="number"
          min={1}
          required
          placeholder="FAQ's count"
          value={noOfFaqs}
          onChange={(e) => setFaqsCount(e.target.value)}
        />
        <input
          className="flex-1 p-3 rounded-md border focus:outline-none focus:border-blue-500"
          type="number"
          min={1}
          required
          placeholder="Questions count"
          value={noOfQuestions}
          onChange={(e) => setQuestionsCount(e.target.value)}
        />
        <button
          type="submit"
          onClick={(e) => submitFormHandler(e)}
          className={`flex-1 p-3 rounded-lg bg-blue-500 text-white font-bold text-lg ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={loading}
        >
          {loading ? "Generating..." : "Generate"}
        </button>
      </div>

      {/* Only display "No result" when chatGPTRes is empty and there is no error */}
      {chatGPTRes !== null &&
        !loading &&
        Object.keys(chatGPTRes).length === 0 &&
        !error && (
          <div className="text-center mt-5 font-bold text-2xl">
						Could not generate questions for the given topic. Please try again !
					</div>
        )}

      {/* Remove the "No result" message when there is an error */}
      {!loading && error && (
        <div className="text-center mt-5 text-red-500 font-bold text-2xl">
          Error: Unable to fetch data
        </div>
      )}
      {!loading &&
        chatGPTRes !== null &&
        Object.keys(chatGPTRes).length > 0 && (
          <Reply repliesList={chatGPTRes} />
        )}
    </div>
  );
}

export { Form };
