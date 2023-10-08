import React from 'react'

import Helmet from '../components/Helmet/Helmet'
import '../styles/home.css'

import { Container, Row, Col } from 'reactstrap'
import heroImg from '../assets/images/hero-img.png'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

import Services from '../services/Services'
import ProductList from '../components/UI/ProductList'

const Home = () => {

  const year = new Date().getFullYear()
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
          <ProductList />
        </Row>
      </Container>
    </section>
  </Helmet>
  )
}

export default Home