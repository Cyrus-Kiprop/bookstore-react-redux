import React from 'react';

const BooksForm = () => {
  const categories = ['action', 'biography', 'history', 'horror', 'kids', 'learning', 'sci-fi'];
  return (
    <form>
      <input type="text" name="book" placeholder="new book" />
      <select>
        {categories.map((category) => (
          <option key={category} value={category}>{category}</option>
        ))}
      </select>
      <button type="submit">create new book</button>
    </form>
  );
};

export default BooksForm;