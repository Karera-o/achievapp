import React from 'react';
import './App.css';
// import { NavSide } from './ui/components/navSide/navSide';
// import { NavSide } from './ui/components/navSide/navSide';
import  SignUpPage  from './ui/pages/signUpPage/signUpPage';
import  SignInPage  from './ui/pages/signInPage/signInPage';
import { HashRouter as Router, Routes,Route} from "react-router-dom";
import MainPage from './ui/pages/mainPage/mainpage';

function App() {
  return (
      <div className="App">
         
         {/* <div id='appLeftSide'>
         
         </div>
         <div id='appRightSide'>
           
         </div> */}
         {/* <NavSide /> */}
         <Router>
         <Routes>
          <Route path='/' element={<SignUpPage/>} />
          <Route path='/signin' element={<SignInPage/>} /> 
          <Route path='signup' element={<SignUpPage/>} />
          <Route path='/navbar' element={<MainPage />}/>
         </Routes> 
         </Router>
       </div>
       
    
  );
}

export default App;
