import {Component} from 'react'
import ProductCard from '../ProductCard' // Product Card component to display products
import './index.css'

class AllProductsSection extends Component {
  state = {
    productsList: [],
  }

  componentDidMount() {
    this.getProducts()
  }

  getProducts = async () => {
    const apiUrl = 'https://fakestoreapi.com/products'
    const options = {
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const fetchedData = await response.json()
      // Assuming the data returned doesn't have brand and rating, adjusting accordingly.
      const updatedData = fetchedData.map(product => ({
        title: product.title,
        price: product.price,
        category: product.category,
        description: product.description,
        id: product.id,
        imageUrl: product.image,
      }))
      this.setState({
        productsList: updatedData,
      })
    }
  }

  renderProductsList = () => {
    const {productsList} = this.state
    return (
      <ul className="products-list">
        {productsList.map(product => (
          <ProductCard productData={product} key={product.id} />
        ))}
      </ul>
    )
  }

  render() {
    return this.renderProductsList()
  }
}

export default AllProductsSection
