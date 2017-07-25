const React = require('react');
const ReactDOM = require('react-dom');
const { Route, HashRouter, Switch } = require('react-router-dom');

const Main = require('Main');

// load foundation
$(document).foundation();

// App css
require('applicationStyles');

ReactDOM.render(
  <HashRouter>
    <Main>
      <Switch>
      </Switch>
    </Main>
  </HashRouter>,
  document.getElementById('app'),
);
