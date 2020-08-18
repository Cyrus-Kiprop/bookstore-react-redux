export const createBook = book => ({ type: 'CREATE_BOOK', payload: book });// action creators

export const removeBook = book => ({ type: 'REMOVE_BOOK', payload: book });
