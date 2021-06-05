import React, { Component } from "react";
import { connect } from "react-redux";
import { filterProducts, sortProducts } from "../actions/productActions";

class Filter extends Component {
  render() {
    return !this.props.filterProducts ? (
      <div>Loading...</div>
    ) : (
      <div className="filter">
        <div className="filter-result">{this.props.count} Products</div>
        <div className="filter-sort">
          Order
          <select
            value={this.props.sorts}
            onChange={(e) =>
              this.props.sortProducts(this.props.filteredItems, e.target.value)
            }
          >
            <option value="latest">Latest</option>
            <option value="lowest">Lowest</option>
            <option value="highest">Highest</option>
          </select>
        </div>
        <div className="filter-size">
          Filter
          <select
            value={this.props.size}
            onChange={(e) =>
              this.props.filterProducts(this.props.products, e.target.value)
            }
          >
            <option value="">All</option>
            <option value="XS">XS</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
          </select>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    size: state.products.size,
    sort: state.products.sort,
    products: state.products.items,
    filteredItems: state.products.filterItems,
  };
}

export default connect(mapStateToProps, {
  filterProducts,
  sortProducts,
})(Filter);
