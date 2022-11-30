import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import Login from "./Login";
import Game from "./Game";
function App() {
  const [isLogin, setIsLogin] = useState(false);
  return (
      <div className="App">

      {/*<--       <Game />*/}


            <>
              <Login setIsAuth={setIsLogin} />
           </>

      </div>
  );
}

export default App;
