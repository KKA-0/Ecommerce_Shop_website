import React from 'react'
import satisfaction from './../../images/1.svg'
import budget from './../../images/budget.svg'
import peace from './../../images/peace.svg'

const end = () => {
  return (
    <div>
        <section class="end">
        <div class="svg-icons">
          <div class="svg-icons-gap">
            <img data-aos="fade-up" id="sexy-sa" data-aos-duration="3000" class="svg" src={satisfaction}></img>
            <div class="svg-content">
              <h3>Love The Product</h3>
            </div>
          </div>
          <div class="svg-icons-gap">
            <img data-aos="fade-up" data-aos-duration="3000" class="svg" src={budget}></img>
            <div class="svg-content">
              <h3>For Every Budget</h3>
            </div>
          </div>
          <div class="svg-icons-gap">
            <img data-aos="fade-up" data-aos-duration="3000" class="svg" src={peace}></img>
            <div class="svg-content">
              <h3>Customer Satisfaction</h3>
            </div>
          </div>
        </div>
            
    </section>
    </div>
  )
}

export default end