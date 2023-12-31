import React from 'react'

const ProductCards = (props) => {
  console.warn(props.cardInfo.name)
  return (
        <div class="container page-wrapper">
  <div class="page-inner">
    <div class="row">
      <div class="el-wrapper">
        <div class="box-up">
          <img class="img" src="https://assets.mysleepwell.com/uploads/products/Cheerful-Spring_1920-1632219283730.jpg" alt=""></img>
          <div class="img-info">
            <div class="info-inner">
              <span class="p-name">{props.cardInfo.name}</span>
              <span class="p-company">Agarwal Handloom</span>
            </div>
            <div class="a-size">Colors Available : <span class="size">Red, Blue , Yellow , Brown</span></div>
          </div>
        </div>

        <div class="box-down">
          <div class="h-bg">
            <div class="h-bg-inner"></div>
          </div>

          <a class="cart" href="#">
            <span class="price">Rs {props.cardInfo.price}</span>
            <span class="add-to-cart">
              <span class="txt">View</span>
            </span>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}

export default ProductCards