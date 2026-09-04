import React, { useState } from 'react'
import LogoutBtn from './components/btcomponents/LogoutBtn';
import LoginBtn from './components/btcomponents/LoginBtn';

const ConditionalRendering = () => {
  const[isLogin, setIsLogin] = useState(true);

  return(
    <div>
        {/* {isLogin ? <LogoutBtn/> : <LoginBtn/>} */}
        {isLogin && <LogoutBtn/>}
    </div>
  )

//   if(isLogin){
//     return(
//         <LogoutBtn onClick={()=>setIsLogin(false)}/>
//     )
//   }else{
//     return(
//         <LoginBtn/>
//     )
//   }
}

export default ConditionalRendering