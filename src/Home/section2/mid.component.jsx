import React from 'react'
import bg1 from './../../images/bg1.jpg'
import { Link } from 'react-router-dom';

const mid = () => {
  return (
    <div>
    <section class="mid-2">
        <article class="card">
            <img class="card__background" src={bg1} alt="" width="1920" height="2193"></img>
            <div class="card__content | flow">
            <div class="card__content--container | flow">
                <h2 class="card__title">Royal Rajasthani BedSheets</h2>
                <p class="card__description">
                Get the best quality Bedsheets for All Occasions Double and Single Bed.
                </p>
            </div>
            </div>
        </article>
        <article class="card">
            <img
            class="card__background"
            src="https://wakefitdev.gumlet.io/img/solid-comforter/teal-yellow/3.jpg?w=1200"
            alt=""
            width="1920"
            height="2193"
            ></img>
            <div class="card__content | flow">
            <div class="card__content--container | flow">
                <h2 class="card__title">Linear Cool Floral Bedsheets</h2>
                <p class="card__description">
                Get the best quality Curtains for All Occasions In Any Size.
                </p>
            </div>
            </div>
        </article>
        <article class="card">
            <img
            class="card__background"
            src="https://assets.mysleepwell.com/uploads/products/Playground-010-1920-0-1672488026579.jpg"
            alt=""
            width="1920"
            height="2193"
            ></img>
            <div class="card__content | flow">
            <div class="card__content--container | flow">
                <h2 class="card__title">Berry Crush Winter Comforter</h2>
                <p class="card__description">
                Get the best quality Mattress for Every Budget and Comfort.
                </p>
            </div>
            </div>
        </article>
        <article class="card">
            <img
            class="card__background"
            src="https://assets.mysleepwell.com/uploads/products/Cheerful-Spring_1920-1632219283730.jpg"
            alt=""
            width="1920"
            height="2193"
            ></img>
            <div class="card__content | flow">
            <div class="card__content--container | flow">
                <h2 class="card__title">Siliconised Microfiber Reversible Comforter</h2>
                <p class="card__description">
                Get the best quality Mattress for Every Budget and Comfort.
                </p>
            </div>
            </div>
        </article>

        </section>
        <center>
           <Link to='/product'><button class="button-89">Show More</button></Link>
        </center>
    </div>
  )
}

export default mid