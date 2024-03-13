import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import "./QuoteGenerator.css";
import Quote from "../quote/Quote";

import { quotesList } from "../../data";
import Category from "../category/Category";
import Spinner from "../spinner/Spinner";

function QuoteGenerator() {
  const [quotes, setQuotes] = useState([]);
  const [quote, setQuote] = useState(quotes[0] || "");
  const [category, setCategory] = useState("all");
  const [showCategory, setShowCategory] = useState(true);

  const getRandomQuote = useCallback(() => {
    const randNum = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randNum]);
  }, [quotes]);

  useEffect(() => {
    const getQuote = async () => {
      const options = {
        method: "GET",
        url: `https://famous-quotes4.p.rapidapi.com/random?category=${category}&count=25`,
        params: {
          token: process.env.REACT_APP_API_TOKEN,
        },
        headers: {
          "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
          "X-RapidAPI-Host": process.env.REACT_APP_API_HOST,
        },
      };

      try {
        const response = await axios.request(options);
        setQuotes(response.data);
        setShowCategory(true);
      } catch (error) {
        setShowCategory(false);
        setQuotes(quotesList);
        console.log(error);
      }
    };
    getQuote();
  }, [category]);

  useEffect(() => {
    const randNum = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randNum]);
  }, [quotes]);

  const handleChange = (e) => {
    setCategory(e.target.value);
  };

  return (
    <div className="quotes-container">
      <h1>Thought of the Day</h1>
      <h3>Quotes</h3>
      {showCategory && <Category category={category} onChange={handleChange} />}
      {quote ? (
        <Quote text={quote?.text} author={quote?.author} />
      ) : (
        <Spinner />
      )}
      <div className="button-group">
        <button onClick={getRandomQuote}>Get Quote</button>
      </div>
    </div>
  );
}

export default QuoteGenerator;
