import React from 'react'

let gallery=["./img1.webp","./img2.jpg","./img3.jpg","./img4.jpg","./img7.jpg","./img8.jpg","./img5.jpg","./img6.jpg"]

const Gallery = () => {
  return <section className='gallery'>
    <h1>BETTER BEAT BEAST</h1>
    <div className='images'>
    {
      gallery.slice(0,3).map((element, index)=>(
        <img  key={index} src={element} alt='galleryImage' />
      ))
    }
    </div>
    <div className='images'>
    {
      gallery.slice(3,6).map((element, index)=>(
        <img  key={index} src={element} alt='galleryImage' />
      ))
    }
    </div>
    <div className='images'>
    {
      gallery.slice(6,9).map((element, index)=>(
        <img  key={index} src={element} alt='galleryImage' />
      ))
    }
    </div>

  </section>
}

export default Gallery
