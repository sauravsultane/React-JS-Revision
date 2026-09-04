import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import StateLifting from './StateLifting.jsx'
import ConditionalRendering from './ConditionalRendering.jsx'

createRoot(document.getElementById('root')).render(
  <>
    {/* <App /> */}
    {/* <StateLifting/> */}
    <ConditionalRendering/>
  </>,
)
