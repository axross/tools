const { createHistory } = require('history');
const React = require('react');
const ReactDOM = require('react-dom');
const { Provider } = require('react-redux');
const { Router, Route, IndexRoute } = require('react-router');
const { initializeStore } = require('./store');
const reducers = require('./reducers');
const Root = require('./Root');
const { IndexRouteComponent } = require('./routes');

const getRoutes = history => {
  return (
    <Router history={history}>
      <Route path="/" component={Root}>
        <IndexRoute component={IndexRouteComponent} />
      </Route>
    </Router>
  );
};

document.addEventListener('DOMContentLoaded', () => {
  const history = createHistory();
  const store = initializeStore(reducers);

  ReactDOM.render(
    <Provider store={store}>
      {getRoutes(history)}
    </Provider>,
    document.getElementById('app')
  );
});
