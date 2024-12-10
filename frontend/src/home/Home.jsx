import React from 'react'
import Navbar from '../component/Navbar'
import Banner from '../component/Banner'
import Footer from '../component/Footer'
import Freebook from '../component/Freebook'
function Home() {
  return (<>
    <Navbar></Navbar>
    <Banner></Banner>
    <Freebook></Freebook>
    <Footer></Footer>
  </>
  )
}

export default Home