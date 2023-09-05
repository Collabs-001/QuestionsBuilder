function SearchBar({ searchTopic, setSearchTopicHandler }) {
  return (
    <input
      type="text"
      className="flex-1 p-3 rounded-md border focus:outline-none focus:border-blue-500"
      placeholder="Add tags here"
      required
      value={searchTopic}
      onChange={(e) => setSearchTopicHandler(e)}
    />
  );
}

export { SearchBar };

