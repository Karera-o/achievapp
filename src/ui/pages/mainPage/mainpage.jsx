import React from 'react'
import "./mainPage.css"
import { NavSide } from '../../components/navSide/navSide';
import { MainHeader } from '../../components/mainSide/mainHeader/mainHeader';
import { MainCard } from '../../components/mainSide/mainCard/mainCard';
import { CgMenu } from "react-icons/cg"
import Suggestion from '../../components/rightSide/suggestion/suggestion';
import RightSidePost from '../../components/rightSide/header/rightSidePost';

const MainPage = () => {
  return (
    <div id='mainpageContent'>
        <div id='mainpageLeftside'>
            <NavSide />
        </div>
        <div id='mainpageMainside'>
            <div id='header1'>
              <span id='menu'><CgMenu /></span>
              <MainHeader />
              <span id="logo"></span>
            </div>
            <div id='content'>
              <MainCard />
              <MainCard />
              <MainCard />
              <MainCard />
            </div>
            
        </div>
        <div id='mainpageRightside'>
          
          <RightSidePost />
          <Suggestion/>
        </div>
    </div>
  )
}

export default MainPage