import React from 'react'
import Nav from './../Nav/nav.component'
import Footer from './../Footer/Footer'
import Cards from './productCards'
const productPage = () => {
  return (
    <div>
        <Nav />
        <div className='cardsContainer'>
          <Cards />
          <Cards />
          <Cards />
        </div>
        <Footer />
    </div>
  )
}

export default productPage