const initialLogin={login:false,token:null,email:'',name:''}
export const LoginReducer = (state=initialLogin,action)=>{

    switch(action.type){
        case "LOGIN": 
        localStorage.setItem('login',action.payload.login);
        localStorage.setItem('token',action.payload.token);
        localStorage.setItem('email',action.payload.email);
        localStorage.setItem('name',action.payload.name);
        return {login:action.payload.login,token:action.payload.token,email:action.payload.email,name:action.payload.name}
        default:
            return state;
    }
}