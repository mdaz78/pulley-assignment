import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import GlobalStyle from './components/styled/globalStyles';

const root = document.getElementById('root');

ReactDOM.render(
  <>
    <GlobalStyle />
    <App />
  </>,
  root,
);
