const booksReducer = (state = [], action) => {
  if (action.type === 'CREATE_BOOK') {
    return [...state, action.payload];
  }
  if (action.type === 'REMOVE_BOOK') {
    return state.filter((book) => book.id !== action.payload.id);
  }
  return state;
};

export default booksReducer;
