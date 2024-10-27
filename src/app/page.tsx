import FeaturedCoures from '@/components/FeaturedCourses'
import UpComingWebinars from "@/components/UpComingWebinars"
import HeroSection from '@/components/HeroSection'
import WhyChooseUs from '@/components/WhyChooseUs'
import React from 'react'
import TestiMonialCard from '@/components/TestiMonialCard'
import Instructor from '@/components/Instucters'

const page = () => {
  return (
    <main className='min-h-screen bg-black/[0.96] bg-grid-white/[0.07]'>
      <HeroSection/>
      <FeaturedCoures/>
      <WhyChooseUs/>
      <UpComingWebinars/>
      <TestiMonialCard/>
      <Instructor/>
      
      
    </main>
  )
}

export default page
