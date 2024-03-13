import React from "react";
import PropTypes from "prop-types";
import "./Quote.css";

function Quote({ text, author }) {
  return (
    <div className="quote-container">
      <div className="quote-box">
        <i className="fa-solid fa-quote-left"></i> {text}
        <i className="fa-solid fa-quote-right"></i>
      </div>
      <span>- {author}</span>
    </div>
  );
}

Quote.propTypes = {
  text: PropTypes.string,
  author: PropTypes.string,
};

export default Quote;
