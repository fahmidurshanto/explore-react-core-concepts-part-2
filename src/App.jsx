import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'
import Team from './team'
import Users from './user'
import Friends from './friends'

function App() {

 

  function handleClick(){
    alert('Button clicked')
  }
 
  const handleClick2 = () =>{
    alert('Button 2 Clicked')
  }

  const addToFive = (num) => {
    alert(num + 5);
  }
 return (
    <>

      <h3>React core concepts 2</h3>
      <Friends></Friends>
      <Users></Users>
      <Team></Team>
     <Counter></Counter>
      {/* <button onClick={handleClick}>Click Me</button> */}
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click2</button>
      <button onClick={() => alert('Button Three Clicked')}>Third</button>

      {/* Vejailla jinish */}
      <button onClick={() =>addToFive(50)}>Forth</button>
    </>
  )
}

export default App
