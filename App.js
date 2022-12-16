import React from 'react';
import {View} from 'react-native';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import {applyMiddleware, combineReducers, configureStore} from 'redux';
import reducers from './app/reducers';

const App = () => {
  const rootReducer = combineReducers({...reducers});
  const store = configureStore(rootReducer, applyMiddleware(thunk));
  return (
    <Provider store={store}>
      <View> </View>
    </Provider>
  );
};

export default App;
