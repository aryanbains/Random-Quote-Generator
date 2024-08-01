import React, { useState, useEffect } from 'react';
import QuoteCard from './Components/QuoteCard/QuoteCard';
import './App.css';

const App = () => {
  const [quote, setQuote] = useState('');
  const [savedQuotes, setSavedQuotes] = useState([]);

  useEffect(() => {
    fetchQuote();
  }, []);

  const fetchQuote = async () => {
    const response = await fetch('https://ron-swanson-quotes.herokuapp.com/v2/quotes');
    const data = await response.json();
    setQuote(data[0]);
  };

  const saveQuote = (quote) => {
    setSavedQuotes((prevQuotes) => [...prevQuotes, quote]);
  };

  return (
    <div className="App">
      <h1>Ron Swanson Quotes</h1>
      <button onClick={fetchQuote}>Get New Quote</button>
      {quote && <QuoteCard quote={quote} onSave={saveQuote} />}
      <h2>Saved Quotes</h2>
      <div className="saved-quotes">
        {savedQuotes.map((savedQuote, index) => (
          <QuoteCard key={index} quote={savedQuote} onSave={() => {}} />
        ))}
      </div>
    </div>
  );
};

export default App;
