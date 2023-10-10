import React, {useState, useEffect} from 'react'

import Helmet from '../components/Helmet/Helmet'
import '../styles/home.css'

import { Container, Row, Col } from 'reactstrap'
import heroImg from '../assets/images/hero-img.png'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import products from '../assets/data/products'
import counterImg from '../assets/images/counter-timer-img.png'
import Clock from '../components/UI/Clock'

import Services from '../services/Services'
import ProductList from '../components/UI/ProductList'

const Home = () => {

  const [trendingProducts, setTrendingProducts] = useState([])
  const [bestSalesProducts, setBestSalesProducts] = useState([])
  const [mobileProducts, setMobileProducts] = useState([])
  const [wirelessProducts, setWirelessProducts] = useState([])
  const [popularProducts, setPopularProducts] = useState([])

  const year = new Date().getFullYear()

  useEffect(()=>{
    const filterTrendingProducts = products.filter(
      item=> item.category === 'chair');
    
    const filterBestSalesProducts = products.filter(
      item=> item.category === 'sofa');

    const filterMobileProducts = products.filter(
      item=> item.category === 'mobile');

    const filterWirelessProducts = products.filter(
      item=> item.category === 'wireless');

    const filterPopularProducts = products.filter(
      item=> item.category === 'watch');
    
    setTrendingProducts(filterTrendingProducts)
    setBestSalesProducts(filterBestSalesProducts)
    setMobileProducts(filterMobileProducts)
    setWirelessProducts(filterWirelessProducts)
    setPopularProducts(filterPopularProducts)
  }, []);

  return (
  <Helmet title={'Home'}>
    <section className="hero-section">
      <Container>
        <Row>
          <Col lg='6' md='6'>
            <div className="hero-content">
              <p className="hero-subtitle">Trending product in {year}</p>
              <h2>Make Your Interior More Minimalistic & Modern</h2>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. In exercitationem porro quo aspernatur reiciendis eaque eligendi et amet. Autem, magni.</p>

              <motion.button whileHover={{scale: 1.1}} className="buy-btn"><Link to='/shop'>SHOP NOW</Link></motion.button>
            </div>
          </Col>
          <Col lg='6' md='6'>
            <div className="hero-img">
              <img src={heroImg} alt="hero image" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>

    <Services />
    <section className="trending-products">
      <Container>
        <Row>
          <Col lg='12' className='text-center'>
            <h2 className="section-title">Trending Products</h2>
          </Col>
          <ProductList data={trendingProducts}/>
        </Row>
      </Container>
    </section>
    <section className="best-sales">
      <Container>
      <Row>
          <Col lg='12' className='text-center'>
            <h2 className="section-title">Best Sales</h2>
          </Col>
          <ProductList data={bestSalesProducts}/>
        </Row>
      </Container>
    </section>
    <section className="timer-count">
      <Container>
        <Row>
          <Col lg='6' md='12' className='count-down-col'>
            <div className="clock-top-content">
              <h4 className='text-white fs-6 mb-2'>Limited Offers</h4>
              <h3 className='text-white fs-5 mb-3'>Quality Armchairs</h3>
            </div>
            <Clock />
            <motion.button whileHover={{scale: 1.1}} className="buy-btn store-btn"><Link to='/shop'>Visit Shop</Link></motion.button>
          </Col>
          <Col lg='6' md='12' className='text-end counter-img'>
            <img src={counterImg} alt="" />
          </Col>
        </Row>
      </Container>
    </section>
    <section className="new-arrivals">
      <Container>
        <Row>
          <Col lg='12' className='text-center mb-5'>
            <h2 className="section-title">New Arrivals</h2>
          </Col>
          <ProductList data={mobileProducts} />
          <ProductList data={wirelessProducts}/>
        </Row>
      </Container>
    </section>
    <section className="popular-category">
      <Container>
          <Row>
            <Col lg='12' className='text-center mb-5'>
              <h2 className="section-title">Popular in Category</h2>
            </Col>
            <ProductList data={popularProducts}/>
          </Row>
        </Container>
    </section>
  </Helmet>
  )
}

export default Home