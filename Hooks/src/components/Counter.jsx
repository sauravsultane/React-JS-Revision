import React, { useState } from 'react'

const Counter = () => {
    const [start , setStart] = useState(0);
    return (
        <div className=''>
            <div className='flex flex-col items-center justify-center gap-2'>
                <p>You Clicked</p>
                <p>{start} times</p>
                <button className='bg-blue-500 text-white p-2 rounded-md' onClick={()=>{
                    setStart(start+1);
                }}>Click me</button>
            </div>

        </div>
    )
}

export default Counter