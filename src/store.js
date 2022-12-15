const { createStore } = require("redux");
const { default: rootReducer } = require("./reducers");

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;