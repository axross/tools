const initialState = {
  value: 1,
};

const exampleReducer = (previousState = initialState, action) => {
  console.trace('do something');

  return previousState;
};

module.exports = exampleReducer;
