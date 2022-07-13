import React from 'react'
import Link from 'next/link'
//import { Link } from 'react-router-dom'
import {urlFor} from '../lib/client';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const HeroBanner = ({heroBanner}) => {
  return (
    <div className='hero-banner-container'>
      
      <div>
        <p className='beats-solo'>{heroBanner.smallText}</p>
        <h3>{heroBanner.midText}</h3>
        <h1>{heroBanner.largeText1}</h1>
        <img src={urlFor(heroBanner.image)} alt="headphones" className='hero-banner-image'></img>

        <div>
          <Link href="/product/macbook-mair-m1-2020-512-gb">
            <button type="button">{heroBanner.buttonText}</button>
          </Link>
          <div className="desc">
            <h5>Description</h5>
            <p>{heroBanner.desc}</p>

          </div>
        </div>

      </div>
    </div>
  )
}

export default HeroBanner