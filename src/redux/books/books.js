import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      const { id, title, author } = action.payload;
      state.push({ id, title, author });
    },
    removeBook: (state, action) => {
      const bookIndex = state.findIndex((book) => book.id === action.payload);
      state.splice(bookIndex, 1);
    },
  },
});

export const { addBook, removeBook } = booksSlice.actions;

export default booksSlice.reducer;
