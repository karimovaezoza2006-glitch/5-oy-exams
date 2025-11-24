import React from 'react'
import Showcase from "./Showcase"
import Best_Sellers from './Best_Sellers';
import Cards from './Cards';
import Delivery from './Delivery';
import New_products from './New_products';
import Our_Blogs from './Our_Blogs';
import Products from './Products';
import Smart_watch from './Smart_watch';
import Station from './Station';
import Top_brands from './Top_brands';
const Home = () => {
  return (
    <div>
        <Showcase/> {/*bajarildi*/}
        <Cards/>
        <Products/>
        <New_products/>
        <Station/>
        <Best_Sellers/>
        <Top_brands/>
        <Smart_watch/>
        <Our_Blogs/>
      <Delivery/>
    </div>
  )
}

export default Home
