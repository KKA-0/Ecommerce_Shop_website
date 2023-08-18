import React from 'react'
import '../script'
import bg1 from './../../images/bg1.jpg'
import bg2 from './../../images/bg2.jpg'
import bg3 from './../../images/bg3.jpg'

const Start = () => {
  return (
    <div>
        <section class="start">
            <div class="slideshow-container">
                <div class="mySlides fade">
                    <img src={bg1} alt='' style={{width:"100%", height:"300px", borderRadius:"10px"}}>
                    </img>
                </div>
                <div class="mySlides fade">
                    <img src={bg2} alt='' style={{borderRadius: "10px", width: "100%", height: "300px"}}>
                    </img>
                </div>
                <div class="mySlides fade">
                    <img src={bg3} alt='' style={{"borderRadius": "10px", "width": "100%", "height": "300px"}}></img>
    
                </div>
                    <a class="prev" onclick="plusSlides(-1)">❮</a>
                    <a class="next" onclick="plusSlides(1)">❯</a>  
            </div>
            <div id="dots">
                <span class="dot" onclick="currentSlide(1)"></span> 
                <span class="dot" onclick="currentSlide(2)"></span> 
                <span class="dot" onclick="currentSlide(3)"></span> 
            </div>
            <h1 class="head">Agarwal Handloom</h1>
            <h2 class="sogo">Get the best quality handloom products to make your home feel like home.</h2>
            <button class="button-57" role="button"><span class="text">Find US</span><span>Opening Maps</span></button>

        </section>
    </div>
  )
}

export default Start