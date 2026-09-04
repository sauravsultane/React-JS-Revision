import React, { useState } from 'react';
import LogoutBtn from './components/btcomponents/LogoutBtn';
import LoginBtn from './components/btcomponents/LoginBtn';

const ConditionalRendering = () => {
  const [isLogin, setIsLogin] = useState(true);

  if (isLogin) {
    return (
      <LogoutBtn
        isLogin={isLogin}
        setIsLogin={setIsLogin}
      />
    );
  } else {
    return (
      <LoginBtn
        isLogin={isLogin}
        setIsLogin={setIsLogin}
      />
    );
  }
};

export default ConditionalRendering;