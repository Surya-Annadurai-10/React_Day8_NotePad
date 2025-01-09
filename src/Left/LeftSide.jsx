import { useRef, useState } from 'react'
import styles from './LeftSide.module.css'
import { IoIosAddCircle } from "react-icons/io";
import { MdDelete } from "react-icons/md";


const Left =({setHomePage,homePage,input , setInput,notesData , setNotesData}) =>{
 const editRef = useRef(null);
const handleAdd = () =>{
   setNotesData([
      input,
    ...notesData
 
   ])
   setInput("# Enter title here")
   setNotesData([
     "# Enter title here",
    ...notesData
 
   ])
}

if(notesData.length == 0){
   setHomePage(true);
 }

const handleDelete = (idx) =>{
   console.log("delete");
   const notesDataCopy = [...notesData];
    notesDataCopy.splice(idx , 1)
    setNotesData(notesDataCopy)
}

const handleEdit = (idx) =>{
   console.log(input);
    console.log(idx);
    setInput(notesData[idx]);
    const notesDataCopy = [input, ...notesData];
    notesDataCopy.splice(idx , 1)
    setNotesData(notesDataCopy)
}



    return (
      <>

      <div className={styles.left_con}>
        <div>
            <header className={styles.header_left}>
                <h1>Notes</h1>
                <IoIosAddCircle onClick={handleAdd} role={'button'} tabIndex={0} />

            </header>
        </div>
         <div className={styles.cards_con}>
        
            {
             notesData.map((ele,index) =>{
                return <div className={styles.card} key ={index}>
                  <div className={styles.h3}>
                  <h3 ref={editRef} onClick={() => handleEdit(index)} >{ele}</h3> 
                  </div>
                   <div className={styles.del}>
                   <MdDelete onClick={() => handleDelete(index)} role={"button"} tabIndex={0} />
                   </div>
                </div>
             })
            }
      
         </div>

      </div>
      </>

    )
}

export default Left;
