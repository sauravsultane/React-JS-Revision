import { useEffect, useState } from 'react'
import './App.css'
import Box from './components/Box';
function App() {

  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(1);


  // condation 1 render each time when page render
  // useEffect(()=>{
  //   alert("Page is render")
  // })

  // condation 2 render once if any element is updated
  // useEffect(()=>{
  //   alert("Render once")
  // },[])

  function updatecount() {
    setCount(count + 1);
  }
  // useEffect(()=>{
  //   alert("Render each time when counter is updated")
  // },[count])

  function updattotal() {
    setTotal(total + 1);
  }
  // condation 4 multiple variable for rendering
  // useEffect(()=>{
  //   alert("Render each time when count or total is updated")
  // },[count,total])

  const [num, setNum] = useState(true);
  function available() {
    setNum(false);
  }

  //condation 5 if componend is unbounded from page it wiii return middle return statment

  useEffect(()=>{
    alert("Render 1 st time");

    return()=>{
      alert("Componend is unbounded");
    }
  },[num])



  return (
    <div className=''>
      <div>
        <button className='p-2 ' onClick={updatecount}>Click me</button>
        <br />
        count is : {count}
      </div>
      <div>
        <button className='p-2 ' onClick={updattotal}>Click me</button>
        <br />
        count is : {total}
      </div>
      <div>
        <button onClick={available} className='bg-black rounded p-3 m-4 text-white'>Click to dissapire</button>
        {num ? <Box /> : "not available"}
      </div>
    </div>
  )
}

export default App
