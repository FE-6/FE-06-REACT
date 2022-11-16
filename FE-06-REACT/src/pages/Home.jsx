import React from 'react'
import Navbar from '../components/Navbar'
import News from '../components/News'
import NewsItem from '../components/NewsItem'

const Home = () => {
    return (
      <div>
          <Navbar />
          <NewsItem/>
          <News/>
      </div>
    )
  }
  
  export default Home