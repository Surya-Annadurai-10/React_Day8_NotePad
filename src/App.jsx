import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import styles from './App.module.css'
import Right from './Right/Right'
import Left from './Left/LeftSide'


function App() {
  const [notesData , setNotesData] = useState([
    "# Enter title here"
  ])

  const [input , setInput] = useState("# Enter title here");
 
  

  return (
  <>
    <div className={styles.container}>
     <Left notesData={notesData} setNotesData={setNotesData} input={input} setInput={setInput} />

     <Right notesData={notesData} setNotesData={setNotesData}  input={input} setInput={setInput}/>
  
    
    </div>
  </>
  )
}

export default App
