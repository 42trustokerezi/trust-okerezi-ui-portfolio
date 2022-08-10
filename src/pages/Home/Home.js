import React from 'react'
import Hero from '../../components/Hero/Hero'
import NavMenu from '../../components/Navigation/NavMenu'
import BannerCard from '../../components/Project-Banner-Cards/BannerCard'
import banner1 from '../../assets/banner.png'
import banner2 from '../../assets/banner2.png'
import './home.css'
const Home = () => {
  return (
    <div className="home">
        <NavMenu />
        <Hero />
        <BannerCard 
          img={banner1}
          type="UI UX DESIGN"
          title="ORO E- WALLET MOBILE APP"
          desc="Helping customers transfer and recieve money seamlessly, with real-time currency conversions to facilitate payments"
        />
        <BannerCard 
          img={banner2}
          type="UI UX DESIGN"
          title="ATLAS AIRLINES"
          desc="Improving user experience and ability to book flights easily"
        />
    </div>
  )
}

export default Home