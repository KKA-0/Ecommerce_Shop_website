import React from 'react'
import SimpleImageSlider from "react-simple-image-slider";

const images = [
  { url: "https://thearchitectsdiary.com/wp-content/uploads/2021/07/bedroom-mattress-1024x683.jpg" },
  { url: "https://www.at-home.co.in/cdn/shop/articles/Benefits_of_Having_Bedsheet_850x.jpg?v=1663566836" },
  { url: "https://www.secretlinenstore.com/cdn/shop/files/Vintage_rose_luxury_bedding_bed_linen.jpg?v=1676573061" },
];

const SliderImg = () => {
  return (
    <div className='SliderImg'>
      <SimpleImageSlider
        width={500}
        height={400}
        images={images}
        showBullets={true}
        autoPlay={true}
        showNavs={true}
        alt=""
      />
    </div>
  )
}

export default SliderImg