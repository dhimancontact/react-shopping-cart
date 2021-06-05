import React, { Component } from "react";
import "./App.css";
import Cart from "./components/Cart";
import Filter from "./components/Filter";
import Products from "./components/Products";
import data from "./data.json";
import { Provider } from "react-redux";
import store from "./store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="grid-container">
          <header>
            <a href="/">React shopping cart</a>
          </header>
          <main>
            <div className="content">
              <div className="main">
                <Filter></Filter>
                <Products></Products>
              </div>
              <div className="sidebar">{<Cart></Cart>}</div>
            </div>
          </main>
          <footer>All right is researved.</footer>
        </div>
      </Provider>
    );
  }
}

export default App;
