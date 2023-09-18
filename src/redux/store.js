import { configureStore } from '@reduxjs/toolkit'
import RootReducer from './rootReducer';
import createSagaMiddleware from '@redux-saga/core';

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: RootReducer,
  middleware: () => [sagaMiddleware]
});

export default store;