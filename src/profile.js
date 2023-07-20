import React, { useEffect, useState } from 'react'
import host from './host';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { changeAuth } from './actions/loginAction';
import {FaUser} from 'react-icons/fa'
function Profile() {
    
  const login = useSelector(state => {return state.login})
  const navigate = useNavigate()
  useEffect(()=>{
    if(!login || !login.login){
      navigate('/')
    }
  },[login])
  const dispatch = useDispatch()

    return (
        <div style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",height:"99vh"}}>
            <h3>Prometheus Profile</h3>
                <div style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",height:"auto",borderWidth:1,borderColor:"#bdbdbd",borderStyle:"solid",padding:5+"%",borderRadius:5}}>
                   <FaUser style={{marginBottom:20,fontSize:100}}></FaUser>
    <div>Given Name: {login.name}</div>
    <div>Given Name: {login.email}</div>
    <button onClick={()=>{dispatch(changeAuth())}} style={{marginTop:20,backgroundColor:"#24a0ed",borderWidth:0,padding:10,borderRadius:5,color:"white",cursor:"pointer"}}>LOGOUT</button>
            
        </div>
        </div>
    )
}

export default Profile
