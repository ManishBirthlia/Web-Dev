import logo from '../logo192.png';
import Inputs from '../Inputs';
import '../App.css';
import { NavLink } from 'react-router-dom';
import React, { useContext } from 'react'
import {EffectContext} from "../App";

export default function Home() {
    const {text, beforeText, Theme}=useContext(EffectContext);
  return (
    <div className="App">
      <header style={Theme} className="App-header">
        <NavLink style={Theme} to="/" >Home</NavLink>
        <NavLink style={Theme} to="/deferred" >Deferred</NavLink>
        <img src={logo} className="" alt="logo" />
        <code>After : </code>
        <code>{text}</code>
        <code>-----</code>
        <code>before : </code>
        <code>{beforeText.current}</code>
        <code>-----</code>
        <Inputs />
      </header>
    </div>
  );
}
