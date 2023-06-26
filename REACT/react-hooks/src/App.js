import logo from './logo192.png';
import './App.css';
import { useEffect, useMemo, useRef, useState } from 'react';

function App() {
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
  useEffect(()=>{
    document.querySelector("img").classList.toggle("App-logo");
  },[theme]);
  const dNumber=useMemo(()=>{
    return doubleNumber(number);
  },[number]);
  function doubleNumber(num){
    for(let i=0;i<1000000000;i++){}
    return num*2
  }
  return (
    <div className="App">
      <header style={Theme} className="App-header">
        <img src={logo} className="" alt="logo" />
        <code>After : </code>
        <code>{text}</code>
        <code>-----</code>
        <code>before : </code>
        <code>{beforeText.current}</code>
        <code>-----</code>
        <input style={InputTheme} className='btn' type='text' value={text} onChange={(e)=>{beforeText.current=text;;setText(e.target.value)}} />
        <input style={InputTheme} className='btn' type='Number' value={number} onChange={(e)=>{setNumber(e.target.value)}} />
        <input style={InputTheme} className='btn' type='Number' value={dNumber} />
        <button style={InputTheme} className='btn' onClick={()=>{setTheme(pre=>!pre)}}>Change Theme</button>
      </header>
    </div>
  );
}

export default App;
