import React , { useState } from 'react'



function App() {
  const [count, setCount] = useState(0)

  const addMore = () => {
    if(count<=19){
      setCount(count+1);
    }
  }
  const addLess = () => {
    if (count >0){
      setCount(count-1);
    }
  }

  return (
    <>
      <h1 className=' bg-violet-600 text-white text-3xl p-3 '>JI SWAGAT NHI KAROGE HUMARA {count} </h1>
      <button className=' border-spacing-5 rounded-xl p-4 border-yellow-950' onClick={addMore}>Once More</button>
      <br />
      <button className=' border-spacing-5 rounded-xl p-4 border-yellow-950' onClick={addLess}>One Less</button>
    </>
  )
}

export default App
