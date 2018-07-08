import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers'
import { StyleSheet, Text, View } from 'react-native';
import VisibleTodoList from './containers/visibleTodoList'

const store = createStore(rootReducer)

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <VisibleTodoList/>
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 100,
    flex: 1,
    backgroundColor: '#fff',
  },
});
