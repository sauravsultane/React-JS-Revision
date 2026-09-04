import React from 'react'

const Card = (props) => {
  return (
    <div className='p-25 flex align-center' >
      <input type="text" className='border-2 m-5' onChange={(e)=>props.setName(e.target.value)} />
      {/* <p>Child Component : {props.name}</p> */}
      <p>Multiple state variable:{props.title} : {props.name}</p>
    </div>
  )
}

export default Card