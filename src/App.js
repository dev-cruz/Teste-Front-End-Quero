import React from "react";
import { Provider } from 'react-redux';

import "./App.css";
import "font-awesome/css/font-awesome.min.css";

import Header from './components/Header';
import Content from './components/Content';

import store from './store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Header />
        <Content />
      </Provider>
    </div>
  );
}

export default App;
