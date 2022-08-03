import React from 'react'
import "./mainPage.css"
import { NavSide } from '../../components/navSide/navSide';
import { MainHeader } from '../../components/mainSide/mainHeader/mainHeader';
import { MainCard } from '../../components/mainSide/mainCard/mainCard';

const MainPage = () => {
  return (
    <div id='mainpageContent'>
        <div id='mainpageLeftside'>
            <NavSide />
        </div>
        <div id='mainpageMainside'>
            <MainHeader/>
            <MainCard />
        </div>
        <div id='mainpageRightside'>
        
        </div>
    </div>
  )
}

export default MainPage