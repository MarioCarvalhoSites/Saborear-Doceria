'use client'
import Navbar from '@/app/components/layout/Navbar'
import Footer from '@/app/components/layout/Footer'
import Hero from '@/app/components/sections/Hero'
import About from '@/app/components/sections/About'
import Gallery from '@/app/components/sections/Gallery'
import MyCarousel from '@/app/components/sections/Carousel'
import Videos from '@/app/components/sections/Videos'
import Testimonials from "@/app/components/sections/Testimonials";
import Contact from '@/app/components/sections/Contact'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Gallery />
      <MyCarousel />
      <Videos />
      <Testimonials />
      <About />
      <Contact />
      <Footer />
    </main>
  )
}