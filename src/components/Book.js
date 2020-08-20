import React from 'react';
import PropTypes from 'prop-types';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Book = ({ book, handleRemoveBook }) => (
  <div className="panel">
    <div className="left">
      <div className="book-description">
        <div className="category">{book.category}</div>
        <div className="title">{book.title}</div>
        <div className="author">Susanne Collins</div>
        <div className="d-flex actions">
          <button type="button">Comments</button>
          <button
            onClick={() => handleRemoveBook(book)}
            className="action-button"
            type="button"
          >
            Remove
          </button>
          <button type="button">Edit</button>
        </div>
      </div>
      <div className="stats">
        <CircularProgressbar
          className="progress-bar"
          value={66}
          styles={{
            root: {
              fontSize: '30px',
            },
            path: {
              stroke: '#0290ff',
            },
          }}
        />
        <div className="percentage-value">
          <span className="progress-bar-text">66%</span>
          <span className="percentage-status">completed</span>
        </div>
      </div>
    </div>
    <di className="border" />

    <div className="chapter-details">
      <div>current chapter</div>
      <div>Chapter 17: &quot;A Lesson Learned&quot;</div>
      <div>
        <button
          type="button"
          className="btn btn-primary btn-sm update-progress"
        >
          Update Progress
        </button>
      </div>
    </div>
  </div>
);

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
  handleRemoveBook: PropTypes.func.isRequired,
};

export default Book;
