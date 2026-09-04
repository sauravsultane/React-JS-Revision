import React from 'react';

const LoginBtn = ({ setIsLogin }) => {
  return (
    <button
      className="p-5 border m-10 rounded-lg shadow-sm cursor-pointer text-red-500"
      onClick={() => setIsLogin(true)}
    >
      Login
    </button>
  );
};

export default LoginBtn;