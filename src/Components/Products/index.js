import React, {Component} from 'react'
import ProductFilters from '../ProductFilters'
import AllProductsSection from '../AllProductsSection'
import './index.css'

class Products extends Component {
  render() {
    return (
      <>
        <div className="productsmaincontainer">
          <div className="list">
            <ProductFilters />
          </div>
          <div className="Products">
            <AllProductsSection />
          </div>
        </div>
      </>
    )
  }
}

export default Products
