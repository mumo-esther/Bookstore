import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ books }) => (
  <>
    {books.map((book) => (
      <div key={book.id}>
        <h3>{book.title}</h3>
        <h4>{book.author}</h4>
      </div>
    ))}
  </>
);

Book.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
    }),
  ),
};

Book.defaultProps = {
  books: [],
};

const booksData = [
  { id: 1, title: 'Book title 1', author: 'Book author 1' },
  { id: 2, title: 'Book title 2', author: 'Book author 2' },
  { id: 3, title: 'Book title 3', author: 'Book author 3' },
];

const Books = () => (
  <div>
    <Book books={booksData} />
  </div>
);

export default Books;
