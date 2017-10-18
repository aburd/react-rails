import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createEpicMiddleware } from 'redux-observable';
import { IntlProvider, addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import ja from 'react-intl/locale-data/ja';
import DevTools from '../src/DevTools';
import Routes from '../src/Routes';
import reducer from '../src/views/reducer';
// import epic from './views/epic';
import { flattenMessages } from '../src/lib/intl';
import messages from '../src/i18n/messages';

addLocaleData([...en, ...ja]);

// const epicMiddleware = createEpicMiddleware(epic);

let enhancer;
const { ENVIRONMENT } = process.env;

// create redux store
if (ENVIRONMENT === 'development') {
  enhancer = compose(
    // applyMiddleware(epicMiddleware, thunk),
    applyMiddleware(thunk),
    DevTools.instrument({
      maxAge: 20,
      shouldCatchErrors: true,
    }),
  );
} else {
  // enhancer = compose(applyMiddleware(epicMiddleware, thunk));
  enhancer = compose(applyMiddleware(thunk));
}

const store = createStore(reducer, enhancer);

ReactDOM.render(
  <IntlProvider
    // TODO: include when the app supports multiple languages
    // locale={navigator.language}
    // messages={flattenMessages(messages[navigator.language])}
    locale={'ja'}
    messages={flattenMessages(messages.ja)}
  >
    <Provider store={store}>
      <span>
        <Routes />
        {ENVIRONMENT === 'development' ? <DevTools /> : null}
      </span>
    </Provider>
  </IntlProvider>,
  document.getElementById('root'),
);
