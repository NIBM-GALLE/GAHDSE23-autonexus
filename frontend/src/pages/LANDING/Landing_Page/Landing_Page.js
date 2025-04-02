import React from 'react'
import Landing_Navbar from '../../../components/Landing/Landing_Navbar/Landing_Navbar'
import Landing_Home from '../Landing_Home/Landing_Home'
import Landing_Footer from '../../../components/Landing/Landing_Footer/Landing_Footer'
import Landing_AboutUs from '../Landing_AboutUs/Landing_AboutUs'
import Landing_Cards01 from '../../../components/Landing/Landing_Cards01/Landing_Cards01'
import Landing_Download from '../../../components/Landing/Landing_Download/Landing_Download'
import Lnading_VehiclePage from '../Lnading_VehiclePage/Lnading_VehiclePage'
import { Landing_Service } from '../Landing_Service/Landing_Service'
import Landing_SpareParts from '../Landing_SpareParts/Landing_SpareParts'

const Landing_Page = () => {
  return (
    <div>
        <Landing_Navbar />
        <Landing_Home />
        <Landing_Cards01 />
        <Landing_AboutUs />
        <Landing_Download />
        <Lnading_VehiclePage />
        <Landing_Service />
        <Landing_SpareParts />
        <Landing_Footer />
    </div>
  )
}

export default Landing_Page