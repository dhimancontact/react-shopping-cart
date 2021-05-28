import React, { Component } from "react";
import formatCurrency from "../util/util";
import Fade from "react-reveal/Fade";

export default class Cart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      address: "",
      showCheckokut: false,
    };
  }
  handleInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  createOrder = (e) => {
    e.preventDefault();
    const order = {
      name: this.state.name,
      email: this.state.email,
      address: this.state.address,
      cartItems: this.props.cartItems,
    };

    this.props.createOrder(order);
  };

  render() {
    const { cartItems } = this.props;
    return (
      <div>
        {cartItems.length === 0 ? (
          <div className="cart cart-header">Cart is empty</div>
        ) : (
          <div className="cart cart-header">
            You have {cartItems.length} in the cart{" "}
          </div>
        )}
        <div className="cart">
          <Fade left cascade>
            <ul className="cart-items">
              {cartItems.map((item) => (
                <li key={item._id}>
                  <div>
                    <img src={item.image} alt={item.title}></img>
                  </div>
                  <div>{item.title}</div>
                  <div className="right">
                    {formatCurrency(item.price)} X {item.count}{" "}
                    <button
                      className="button"
                      onClick={() => this.props.removeCartItem(item)}
                    >
                      Remove
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </Fade>
        </div>
        {cartItems.length !== 0 && (
          <div>
            <div className="cart">
              <div className="total">
                <div>
                  Total:{" "}
                  {formatCurrency(
                    cartItems.reduce((a, c) => a + c.price * c.count, 0)
                  )}
                </div>
                <button
                  onClick={() => {
                    this.setState({ showCheckokut: true });
                  }}
                  className="button primary"
                >
                  Proceed
                </button>
              </div>
            </div>
            {this.state.showCheckokut && (
              <Fade right cascade>
                <div className="cart">
                  <form onSubmit={this.createOrder}>
                    <ul className="form-container">
                      <li>
                        <label>Email</label>
                        <input
                          name="email"
                          type="email"
                          requried
                          onChange={this.handleInput}
                        ></input>
                      </li>
                      <li>
                        <label>Name</label>
                        <input
                          name="name"
                          type="text"
                          requried
                          onChange={this.handleInput}
                        ></input>
                      </li>
                      <li>
                        <label>Address</label>
                        <input
                          name="address"
                          type="text"
                          requried
                          onChange={this.handleInput}
                        ></input>
                      </li>
                      <li>
                        <button className="primary" type="submit">
                          Checkout
                        </button>
                      </li>
                    </ul>
                  </form>
                </div>
              </Fade>
            )}
          </div>
        )}
      </div>
    );
  }
}
