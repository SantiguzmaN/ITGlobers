import { createStore } from 'redux';
import generalReducer from './reducers/generalReducer';

function configureStore(state = { rotating: true }) {
  return createStore(generalReducer,state);
}

export default configureStore;
