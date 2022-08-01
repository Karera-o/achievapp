import './App.css';
import { NavSide } from './ui/components/navSide/navSide';
import  SignUpPage  from './ui/pages/signUpPage/signUpPage';
import  SignInPage  from './ui/pages/signInPage/signInPage';
import { BrowserRouter as Router, Routes,Route} from "react-router-dom";

function App() {
  return (
      <div className="App">
         
         {/* <div id='appLeftSide'>
         
         </div>
         <div id='appRightSide'>
           
         </div> */}
         
         <Router>
         <Routes>
          <Route path='/' element={<SignUpPage/>} />
          <Route path='/signin' element={<SignInPage/>} /> 
          <Route path='signup' element={<SignUpPage/>} />
          <Route path='/navbar' element={<NavSide />}/>
         </Routes> 
         </Router>
       </div>
       
    
  );
}

export default App;
