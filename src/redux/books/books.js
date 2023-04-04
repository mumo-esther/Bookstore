const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';
const books = [
  {
    id: 1,
    author: 'Haruki Murakami',
    title: 'Kafka on the Shore',
  },
  {
    id: 2,
    author: 'Gabriel Garcia Marquez',
    title: 'One Hundred Years of Solitude',
  },
  {
    id: 3,
    author: 'Toni Morrison',
    title: 'Beloved',
  },
  {
    id: 4,
    author: 'Octavia Butler',
    title: 'Kindred',
  },
];
export const addAction = (NewBook) => ({
  type: ADD_BOOK,
  payload: NewBook,
});
export const removeAction = (id) => ({
  type: REMOVE_BOOK,
  id,
});

const BooksReducer = (state = books, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state,
        {
          id: Date.now(),
          title: action.payload.title,
          author: action.payload.author,
        },
      ];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.id);
    default:
      return state;
  }
};

export default BooksReducer;
