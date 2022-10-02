import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../features/TodoSlice';

export const store = configureStore({
  reducer: {
    //store the specific state of your app so that redux keeps track of whats going on 
    todos: todoReducer 
  },
});
