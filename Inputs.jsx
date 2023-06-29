import React, { useContext } from 'react'
import {EffectContext} from "./App";
export default function Inputs() {
    const {InputTheme, text ,number, dNumber ,beforeText, setText, setNumber, setTheme}=useContext(EffectContext);
  return (
    <div>
        <input style={InputTheme} className='btn' type='text' value={text} onChange={(e)=>{beforeText.current=text;setText(e.target.value)}} />
        <input style={InputTheme} className='btn' type='Number' value={number} onChange={(e)=>{setNumber(e.target.value)}} />
        <input style={InputTheme} className='btn' type='Number' value={dNumber} />
        <button style={InputTheme} className='btn' onClick={()=>{setTheme(pre=>!pre)}}>Change Theme</button>
    </div>
  )
}
