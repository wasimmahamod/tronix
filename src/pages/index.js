import React from 'react'
import Header from '../components/layout/Header'
import Navbar from './../components/layout/Navbar';
import NavbarButtom from '../components/layout/NavbarButtom';
import Banner from '../components/layout/Banner';
import Catagory from '../components/layout/Catagory';
import NewArrivel from '../components/layout/NewArrivel';
import Feature from '../components/layout/Feature';
import Collection from '../components/layout/Collection';
import Sale from '../components/layout/Sale';
import TopRated from '../components/layout/TopRated';
import Blog from '../components/layout/Blog';
import NewsLetter from '../components/layout/NewsLetter';
import Sponsor from '../components/layout/Sponsor';
import Footer from '../components/layout/Footer';

const index = () => {
  return (
    <>
    <Header/>
    <Navbar/>
    <NavbarButtom/>
    <Banner/>
    <Catagory/>
    <NewArrivel/>
    <Feature/>
    <Collection/>
    <Sale/>
    <TopRated/>
    <Blog/>
    <NewsLetter/>
    <Sponsor/>
    <Footer/>
    </>
  )
}

export default index