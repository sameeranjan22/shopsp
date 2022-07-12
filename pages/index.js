import React from 'react'
import {client} from '../lib/client.js';
import {Product, FooterBanner, HeroBanner} from '../components';
import  SearchBar  from '../components/SearchBar.jsx';
import ClipLoader from "react-spinners/ClipLoader";


export const Home = ({products, bannerData}) => {

  return (
    <>
    
    <HeroBanner heroBanner={bannerData.length && bannerData[0]}/>
    <div className='products-heading'>
    <SearchBar placeholder="Search for a Product" data={products}/>
      <h2>
        Best Selling Products
      </h2>
    </div>
    
    <div className="products-container">
      {products?.map((product) => <Product key={product._id} product={product}/>)}
    </div>
    <FooterBanner footerBanner={bannerData && bannerData[0]}/>
      
    </>
  )
}
export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);


  return {
    props: { products, bannerData}
  }


}
export default Home;