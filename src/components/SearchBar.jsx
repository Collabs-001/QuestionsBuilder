function SearchBar({ searchTopic, setSearchTopicHandler }) {
	return (
		<input
			type="text"
			className="m-5 p-3 rounded z-0 grow focus:shadow focus:outline focus:outline-offset-2 focus:outline-2"
			placeholder="Add tags here"
			required
			value={searchTopic}
			onChange={(e) => setSearchTopicHandler(e)}
		/>
	);
}

export { SearchBar };
