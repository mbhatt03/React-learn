import {useState} from 'react'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
    <h1 className=' text-5xl rounded-3xl shadow-lg flex  justify-center px-3 py-2 font-extrabold'>BGCHANGER</h1>
    <div className=' w-full h-screen duration-200'
    style={{backgroundColor: color}}>
      <div className=' fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-3 py-2 shadow-lg gap-10 bg-white rounded-3xl'>
        <button className=' outline-none py-1 px-4 rounded-full text-white shadow-lg'
        style={{backgroundColor: "red"}} onClick={() => setColor("red")}>RED</button>
        <button className=' outline-none py-1 px-4 rounded-full text-white shadow-lg'
        style={{backgroundColor: "green"}} onClick={() => setColor("green")}>GREEN</button>
        <button className=' outline-none py-1 px-4 rounded-full text-white shadow-lg'
        style={{backgroundColor: "purple"}} onClick={() => setColor("purple")}>PURPLE</button>
        <button className=' outline-none py-1 px-4 rounded-full text-white shadow-lg'
        style={{backgroundColor: "blue"}} onClick={() => setColor("blue")}>BLUE</button>
        <button className=' outline-none py-1 px-4 rounded-full text-white shadow-lg'
        style={{backgroundColor: "orange"}} onClick={() => setColor("orange")}>ORANGE</button>
        <button className=' outline-none py-1 px-4 rounded-full text-white shadow-lg'
        style={{backgroundColor: "yellow"}} onClick={() => setColor("yellow")}>YELLOW</button>
        <button className=' outline-none py-1 px-4 rounded-full text-white shadow-lg'
        style={{backgroundColor: "black"}} onClick={() => setColor("black")}>BLACK</button>
        <button className=' outline-none py-1 px-4 rounded-full text-white shadow-lg'
        style={{backgroundColor: "pink"}} onClick={() => setColor("pink")}>PINK</button>
      </div>
    </div>
    </>
  )
}

export default App
