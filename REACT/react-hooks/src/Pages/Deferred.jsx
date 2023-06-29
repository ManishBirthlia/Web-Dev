import React, { useContext, useDeferredValue, useMemo, useState } from 'react';
import {EffectContext} from "../App";
import { NavLink } from 'react-router-dom';
export default function Deferred() {
    const {Theme}=useContext(EffectContext);
    const [Text,SetText]=useState("");
    const deferredValue=useDeferredValue(Text);
    const list=useMemo(()=>{
      const d=[];
      for(let i=0;i<20000;i++) d.push(<li key={i}>{deferredValue}</li>);
      return d;
    },[deferredValue]);
    return (
    //({isActive})=>{ return {color:"White",textDecorationStyle: "none"}}
    <div className="App">
      <header style={Theme} className="App-header">
        <NavLink style={Theme} to="/" >Home</NavLink>
        <NavLink style={Theme} to="/deferred" >Deferred</NavLink>
        <input type='text' value={Text} onChange={(e)=>SetText(e.target.value)} />
        {list.map(item=>{return item})}
      </header>
    </div>
  )
}
