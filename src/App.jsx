import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import styles from './App.module.css'
import Right from './Right/RightSide'
import Left from './Left/LeftSide'


function App() {
  const [notesData , setNotesData] = useState([
    "# Enter title here"
  ])

  const [input , setInput] = useState("# Enter title here");
  const [homePage, setHomePage] = useState(false);  

const handleHomePage = () =>{
  setHomePage(false);
  setNotesData([...notesData,
     "# Enter title here"
  ])
  
}




  return (
  <>

 
    {
      homePage ?  <div  className={styles.box}>
      <div className={styles.inner}>
         <h1>You have no notes</h1>
         <button onClick={handleHomePage} className={styles.button}>Create one now</button>
      </div>
    </div>  : 
      <div className={styles.container}>
     <Left setHomePage={setHomePage} homePage={homePage} notesData={notesData} setNotesData={setNotesData} input={input} setInput={setInput} />

     <Right notesData={notesData} setNotesData={setNotesData}  input={input} setInput={setInput}/>
  
    
    </div>
    }
  </>
  )
}

export default App
