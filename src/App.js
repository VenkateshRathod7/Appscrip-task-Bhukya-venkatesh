import React, {Component} from 'react'
import Navbar from './Components/Navbar' // Adjust the path if necessary
import Secondheader from './Components/Secondheader'
import Products from './Components/Products'
import Footer from './Components/Footer'

class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Secondheader />
        <Products />
        <Footer />
      </>
    )
  }
}

export default App
