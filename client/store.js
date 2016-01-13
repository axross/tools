const applyMiddleware = require('redux').applyMiddleware;
const combineReducers = require('redux').combineReducers;
const createStore = require('redux').createStore;

let store = {};

const initializeStore = (reducers = {}) => {
  const reducersCombined = combineReducers(reducers);

  store = createStore(reducersCombined);

  return store;
};

module.exports = store;

// it is only first time
module.exports.initializeStore = initializeStore;
