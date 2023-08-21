import React from 'react'
import Nav from './../Nav/nav.component'
import Footer from './../Footer/Footer'
import Cards from './productCards'
import cardInfo from './productsData'
import FilterCards from './filterCards'

const productPage = () => {
  return (
    <div>
        <Nav />
        <FilterCards />
        <div className='cardsContainer'>
          <Cards cardInfo={cardInfo.cardOne}/>
          <Cards cardInfo={cardInfo.cardSec}/>
          <Cards cardInfo={cardInfo.cardThi}/>
        </div>
        <Footer />
    </div>
  )
}

export default productPage