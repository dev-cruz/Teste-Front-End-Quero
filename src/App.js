import React from "react";
import { Provider } from "react-redux";

import "./App.css";
import "font-awesome/css/font-awesome.min.css";

import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";

import store from "./store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Header />
        <Content />
        <Footer />
      </Provider>
    </div>
  );
}

export default App;
