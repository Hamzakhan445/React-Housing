import React from 'react'
import AboutData from '../HomeComp/AboutData'
import Footer from '../HomeComp/Footer'
import Header from '../HomeComp/Header'
import MainHeading from '../HomeComp/MainHeading'

const About = () => {
    return (
        <>
        <Header />
        <div className="container-md p-5 mt-5 ">
        <MainHeading text="About Us" />

        <AboutData />

          </div>
          <Footer />
        </>
    )
}

export default About
