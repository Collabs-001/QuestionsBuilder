function SearchBar({ searchTopic, setSearchTopicHandler }) {
	return (
		<input
			type="text"
			className="m-5 p-3 rounded z-0 focus:shadow focus:outline focus:outline-offset-2 focus:outline-2"
			placeholder="Add tags here"
			value={searchTopic}
			onChange={(e) => setSearchTopicHandler(e)}
		/>
	);
}

export { SearchBar };
