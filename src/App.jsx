import './App.css';
import { NavSide } from './ui/components/navSide/navSide';
import { SignUp } from './ui/components/signUp/signup';
import { SignInPage } from './ui/pages/signInPage/signInPage';

function App() {
  return (
    <div className="App">
         
      {/* <div id='appLeftSide'>
        <NavSide/>
      </div>
      <div id='appRightSide'>
        
      </div> */}
      <SignInPage/>
    </div>
  );
}

export default App;
