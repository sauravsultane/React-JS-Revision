import React from 'react';

const LogoutBtn = ({ setIsLogin }) => {
  return (
    <button
      className='p-5 border m-10 rounded-lg shadow-sm cursor-pointer text-red-500'
      onClick={() => setIsLogin(false)}
    >
      Logout
    </button>
  );
};

export default LogoutBtn;