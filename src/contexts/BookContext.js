import React, { createContext, useReducer } from 'react';
import { bookReducer } from '../reducers/bookReducer';

export const BookContext = createContext();

const originData = require('../test/origin.json')

const BookContextProvider = (props) => {
  const [books, dispatch] = useReducer(bookReducer, [...originData.data]);

  return <BookContext.Provider value={{ books, dispatch }}>{props.children}</BookContext.Provider>;
};

export default BookContextProvider;
