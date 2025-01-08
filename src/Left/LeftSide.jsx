import { useState } from 'react'
import styles from './LeftSide.module.css'
import { IoIosAddCircle } from "react-icons/io";
import { MdDelete } from "react-icons/md";


const Left =({input , setInput,notesData , setNotesData}) =>{

const handleAdd = () =>{
   setNotesData([
    ...notesData,
    input
   ])
   setInput("# Enter title here")
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
    const notesDataCopy = [...notesData , input];
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
         <div>
        
            {
             notesData.map((ele,index) =>{
                return <div className={styles.card} key ={index}>
                  <div className={styles.h3}>
                  <h3 onClick={() => handleEdit(index)} >{ele}</h3> 
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
