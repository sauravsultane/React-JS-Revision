import React, { useState } from 'react'
import Counter from './components/Counter'
import Button from './components/Button'

const App = () => {

  const[count , setCount] = useState(0);

  function handelClick() {
    setCount(count+1);
  }

  return (
    <div className='flex flex-col items-center justify-center h-screen w-screen bg-gray-900 text-white'>
      {/* <Counter/> */}
      <Button handelClick={handelClick} text="Click Me">
          <h1>{count}</h1>
      </Button>
    </div>
  )
}

export default App