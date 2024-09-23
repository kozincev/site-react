import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Header from './Header/Header.jsx'
import OurGoals from './ourGoals/ourGoals.jsx'
import WhyChooseUs from './WhyChooseUs/WhyChooseUs.jsx'
import NewComponent from './NewComponent/NewComponent.jsx'
import HowWeWork from './HowWeWork/HowWeWork.jsx'
import UsedTech from './UsedTech/UsedTech.jsx'
import Industries from './Industries/Industries.jsx'
import GetInTouch from './GetInTouch/GetInTouch.jsx'
import Footer from './Footer/Footer.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Header/>
   <OurGoals/>
   <WhyChooseUs/>
   <HowWeWork/>
   <UsedTech/>
   <Industries/>
   <GetInTouch/>
   <Footer/>
  </StrictMode>,
)
