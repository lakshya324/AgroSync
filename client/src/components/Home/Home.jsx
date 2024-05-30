import React from 'react'
import HomeBanner from './HeroBanner'
import PopularServices from './PopularServices'
import Everything from './Everything'
import Services from './Services'
import AgroBusiness from './AgroBusiness'
import JoinAgro from './joinAgro'
import NavMenu from './NavMenu'
import { useEffect } from 'react'
import axios from 'axios'

function Home() {
  useEffect(()=> {
      axios.get('https://api-h2x3.onrender.com/').then((res) => {
        // console.log(res.data)
      }).catch((err) => {
        console.log(err)
      })
  },[])
  return (
    <div>
     <NavMenu/>
     <HomeBanner/> 
     <PopularServices/>
     <Everything/>
     <Services/>
     <AgroBusiness/>
     <JoinAgro/>
    </div>
  )
}

export default Home
