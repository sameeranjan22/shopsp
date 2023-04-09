import React from 'react'
import Link from 'next/link'
import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai';


const Footer = () => {
  return (
    <div className='footer-container'>
      
      <p>2023 S P Solutions Point Pvt. Ltd. All rights reserved</p>
      <p>Designed & Developed by <Link href="https://www.linkedin.com/in/sameer-ranjan-46b389212/">Sameer Ranjan</Link></p>
      <p className='icons'>
        <AiFillInstagram />
        <AiOutlineTwitter />

      </p>
      
    </div>
  )
}

export default Footer