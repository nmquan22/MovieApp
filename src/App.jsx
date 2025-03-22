// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Header from './components/Header';
//import './App.css';
import Banner from './components/Banner';

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
     <div className="h-full bg-black text-white min-h-screen pb-10 relative">
      <Header/>
      <Banner/>
     </div>
    </>
  )
}

export default App
