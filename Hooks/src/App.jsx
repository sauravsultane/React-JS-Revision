import React, { useState } from 'react'
import Counter from './components/Counter'
import Button from './components/Button'
import Card from './components/Card'


const App = () => {

  const[count , setCount] = useState(0);

  function handelClick() {
    setCount(count+1);
  }

  return (
    <div className='h-100 w-100 p-10 mt-10'>
      <Card/>
    </div>
  )
}

export default App