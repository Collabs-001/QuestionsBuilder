import { useState } from 'react';
import './App.css';
import { Reply, Form } from './components';

function App() {
  const [noOfFaqs, setFaqsCount] = useState(undefined);
  const [searchTopic, setSearchTopic] = useState('');
  const [noOfQuestions, setQuestionsCount] = useState(undefined);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <header className="bg-blue-500 text-white py-4 px-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold">Questions Builder</h1>
      </header>
      <main className="mt-8">
        <Form
          noOfFaqs={noOfFaqs}
          noOfQuestions={noOfQuestions}
          searchTopic={searchTopic}
          setFaqsCount={setFaqsCount}
          setSearchTopic={setSearchTopic}
          setQuestionsCount={setQuestionsCount}
        />
      </main>
    </div>
  );
}

export default App;
