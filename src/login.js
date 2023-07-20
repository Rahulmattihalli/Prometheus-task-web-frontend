import React, { useEffect, useState } from 'react'
import host from './host';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { changeAuth } from './actions/loginAction';

function Login() {
    const [email, setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [name,setName] = useState("")


  const login = useSelector(state => {return state.login})

  useEffect(()=>{
    if(login && login.login){
        navigate('/profile')
    }
  },[login])

const dispatch = useDispatch()

  const [visible, setVisible] = React.useState(false);

  const onToggleSnackBar = () => setVisible(!visible);

  const onDismissSnackBar = () => setVisible(false);
  const [message,setMessage] = useState("Loading please wait...")
  const navigate = useNavigate()

  useEffect(()=>{

  },[visible])

  function ValidateEmail(mail) 
{

  return String(mail)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
}

// const goToProfile = useCallback(() => navigate(Routes.Profile), []);

  const SignupFun = async()=>{
   if(!ValidateEmail(email)){
      setMessage("Not valid email ")
      setVisible(true)
    }
    else if(password.length<6){
      setMessage("password must be at least 6 digits ")
      setVisible(true)
    }
    else{
        fetch(host.hostname+'/v1/users/login',{
            method:"POST",
            headers:{
              'Content-Type': 'application/json'
            },
            body:JSON.stringify({
              email,
              password
            })
          }).then((res)=>{
            return res.json()
          }).then((data)=>{
            if(data.success){
              dispatch(changeAuth(true,data.token,data.email,data.name))
          }
          setMessage(data.message)
        setVisible(true)

          }).catch((err)=>{
            console.log(err)
          })
    }
  }

    return (
        <div style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",height:"99vh"}}>
            <h3>Prometheus Login</h3>
                <div style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",height:"auto",borderWidth:1,borderColor:"#bdbdbd",borderStyle:"solid",padding:5+"%",borderRadius:5}}>
                   
                    <div style={{display:"flex",justifyContent:"center",alignItems:"flex-start",flexDirection:"column",marginTop:20}}>
                        <label>Email</label>
                        <input value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder="Rahul Mattihalli" style={{height:30,width:250,marginTop:5,borderRadius:5,borderColor:"#bdbdbd"}}></input>
                    </div>
                    <div style={{display:"flex",justifyContent:"center",alignItems:"flex-start",flexDirection:"column",marginTop:20}}>
                        <label>Password</label>
                        <input value={password} type="password" onChange={(e)=>{setPassword(e.target.value)}} placeholder="Rahul Mattihalli" style={{height:30,width:250,marginTop:5,borderRadius:5,borderColor:"#bdbdbd"}}></input>
                    </div>
                    <button onClick={SignupFun} style={{marginTop:20,backgroundColor:"#24a0ed",borderWidth:0,padding:10,borderRadius:5,color:"white",cursor:"pointer"}}>LOGIN</button>
                </div>
                <div style={{margin:5}}>Don't have an account ? </div>
                <button style={{borderWidth:0,backgroundColor:"transparent",color:"#24a0ed",cursor:"pointer",textDecoration:"underline"}} onClick={()=>{navigate('/')}}>Sign up</button>
    {visible && <div style={{color:"red",marginTop:25}}>{message}</div>}
        </div>
    )
}

export default Login
