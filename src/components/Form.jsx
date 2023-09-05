import { SearchBar } from "./SearchBar";

function Form() {
  return (
    <div className="flex justify-center flex-col md:flex-row gap-5">
      <SearchBar />
      <input
        className="m-5 p-3 rounded"
        type="number"
        placeholder="FAQ's count "
      />
      <input
        className="m-5 p-3 rounded"
        type="number"
        placeholder="Questions count "
      />
      <button
        type="submit"
        className="p-5 m-5 rounded bg-green-500 font-bold text-lg"
      >
        Generate
      </button>
    </div>
  );
}

export { Form };
