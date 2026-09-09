import React, { useContext } from 'react'
import { ThemeContext } from '../App'

const Child3 = () => {
    // const user = useContext(UserContext);
    const {theme,setTheme} = useContext(ThemeContext);
    function handelclick(){
        if(theme==="light")
            setTheme("black")
        else setTheme("light")
    }
  return (
    <div>
      <button onClick={handelclick}>Change Theme</button>
    </div>
  )
}

export default Child3
