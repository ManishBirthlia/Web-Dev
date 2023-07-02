import Home from './Pages/Home';
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import React, { useEffect, useLayoutEffect, useMemo, useReducer, useRef, useState } from 'react';
import Deferred from './Pages/Deferred';

export const EffectContext = React.createContext();
function App() {
  // const [AllState,setAllState]=useReducer({text:"",number:0,theme:true})
  const [text,setText] =useState("");
  const [number,setNumber] =useState(0);
  const [theme,setTheme] =useState(true);
  const beforeText =useRef("");
  const Theme={
    backgroundColor:theme?"#282c34":"white",
    color: theme?"white":"#282c34"
  }
  const InputTheme={
    backgroundColor:!theme?"#282c34":"white",
    color: !theme?"white":"#282c34"
  }
  // useEffect(()=>{
  //   document.querySelector("img").classList.toggle("App-logo");
  // },[theme]);
  useLayoutEffect(()=>{
    document.querySelector("img").classList.toggle("App-logo");
  },[theme]);
  const dNumber=useMemo(()=>{
    return doubleNumber(number);
  },[number]);
  function doubleNumber(num){
    for(let i=0;i<1000000000;i++){}
    return num*2
  }
  const allStates={InputTheme, text ,number, dNumber ,beforeText, setText, setNumber, setTheme,Theme}
  return (
    <EffectContext.Provider value={allStates}>
      <BrowserRouter>
        <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/deferred' element={<Deferred />} />
        </Routes>
    </BrowserRouter>
    </EffectContext.Provider>
  );
}

export default App;
