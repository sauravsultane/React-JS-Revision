import React, { useState } from 'react'

const Card = (props) => {

  const [color, setColor] = useState('white')

  function handelClick() {
    let r = Math.floor(Math.random() * 256)
    let g = Math.floor(Math.random() * 256)
    let b = Math.floor(Math.random() * 256)

    setColor(`rgb(${r}, ${g}, ${b})`)
  }

  return (
    <div>
      <div
        className="h-100 w-100 flex items-center justify-between"
        style={{ backgroundColor: color }}
      >
        <h1>Saurav Sultane</h1>

        <button
          className="p-4 bg-black text-white rounded"
          onClick={handelClick}
        >
          Click Me
        </button>
      </div>
    </div>
  )
}

export default Card