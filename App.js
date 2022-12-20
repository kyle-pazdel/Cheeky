import React from 'react';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import {View} from 'react-native';
import {applyMiddleware, combineReducers, createStore} from 'redux';
import reducers from './app/reducers';
import Home from './app/containers/homeContainer';

const App = () => {
  const rootReducer = combineReducers({...reducers});
  const store = createStore(rootReducer, applyMiddleware(thunk));
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
};

export default App;
