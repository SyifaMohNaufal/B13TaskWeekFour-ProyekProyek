/* eslint-disable no-unused-vars */
import React, {Component} from 'react';
import {StyleSheet, View, StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import Main from './Src/Main';
import persist from './Src/Config/store';
// import MainNavigator from './Src/Routes/MainNavigator';

const persistStore = persist();

class App extends Component {
  render() {
    return (
      <Provider store={persistStore.store}>
        <PersistGate loading={null} persistor={persistStore.persistor}>
          <Main />
        </PersistGate>
      </Provider>
    );
    // <MainNavigator />;
  }
}

export default App;
