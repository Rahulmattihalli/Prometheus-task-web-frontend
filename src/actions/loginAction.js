export const changeAuth = (login,token,email,name)=>async (dispatch)=>{
    dispatch({
        type:"LOGIN",
        payload:{login:login,token:token,email,name},
    })
 
 }