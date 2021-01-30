import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { reduxState, reduxAction } from './state';

const reducer = (state = reduxState, action) => {
  switch (action.type) {
    case reduxAction.theme:
      return {
        ...state,
        theme: action.value
      };

    default:
      return state;
  }
};

const reduxStore = createStore(reducer, applyMiddleware(thunk));
export default reduxStore;
