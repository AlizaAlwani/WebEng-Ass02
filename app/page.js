import React from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Features } from './components/Features'
import { Faq } from './components/Faq'
import { Cta } from './components/Cta'
import { Footer } from './components/Footer'
import { Pricing } from './components/Pricing'

const page = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="px-[20px] lg:container lg:px-20 mx-auto">
        <Features />
        <Faq /> 
        <Cta />
        <Pricing />
        <Footer />
      </div>
    </>
  )
}

export default page
