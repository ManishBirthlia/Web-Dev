import React, { useContext, useEffect } from 'react'
import {EffectContext} from "./App";
import logo from "./logo192.png";
export default function Inputs() {
  useEffect(()=>{
    var noti;
    document.addEventListener("visibilitychange",()=>{
      if(document.visibilityState==="hidden"){
        Notification.requestPermission().then((perm)=>{
          if(perm==="granted"){
            noti=new Notification("you have seen nothing 😉",{
              body:"Come Back Please",
              icon: "logo192.png",
              // silent: true,
              // requireInteraction: true,
              // badge:"Come Back Please",
              // actions: NotificationAction[],
              // data: {object},
              // dir: top,
              // image: "logo192.png",
              // lang: string,
              // renotify: boolean,
              // tag: "tag",
            });
          }
        });
      }else{
        noti.close();
      }
    });
  },[])
  const {InputTheme, text ,number, dNumber ,beforeText, setText, setNumber, setTheme}=useContext(EffectContext);
  return (
    <div>
        <input style={InputTheme} className='btn' type='text' value={text} onChange={(e)=>{beforeText.current=text;setText(e.target.value)}} />
        <input style={InputTheme} className='btn' type='Number' value={number} onChange={(e)=>{setNumber(e.target.value)}} />
        <input style={InputTheme} className='btn' type='Number' value={dNumber} />
        <button  style={{...InputTheme,cursor:"pointer"}} className='btn' onClick={()=>{setTheme(pre=>!pre)}}>Change Theme</button>
    </div>
  )
}
