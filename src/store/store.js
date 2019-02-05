import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import makeRootReducer from '../reducers/index';

const initialState = {
  choiceItems: [
    { img: 'birds.jpg', tags: [''] },
    { img: 'cats.jpg', tags: [''] },
    { img: 'coffee.jpg', tags: [''] },
    { img: 'cycling.jpg', tags: [''] }
  ],
  selectedTags: [],
  results: {},
};


export default ((initState = initialState) => {
  const middleware = [thunk];

  // const enhancers = [];

  let composeEnhancers = compose;

  if (process.env.NODE_ENV !== 'production') {
    const composeWithDevToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
    if (typeof composeWithDevToolsExtension === 'function') {
      composeEnhancers = composeWithDevToolsExtension;
    }
  }

  const store = createStore(
    makeRootReducer(),
    initState,
    composeEnhancers(
      applyMiddleware(...middleware),
    )
  );
  store.asyncReducers = {};
  return store;
})();
