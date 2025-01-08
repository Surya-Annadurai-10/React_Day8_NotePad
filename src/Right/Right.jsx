import styles from './Right.module.css'
import { MdOutlineStrikethroughS } from "react-icons/md";
import { PiQuotesFill } from "react-icons/pi";
import { FaLink } from "react-icons/fa";
import { MdPhotoSizeSelectActual } from "react-icons/md";
import { FaList } from "react-icons/fa";
import { FaListOl } from "react-icons/fa";
import { FaListCheck } from "react-icons/fa6";
import { useState } from 'react';
import  ReactMarkdown from 'react-markdown'

const Right = ({input , setInput}) =>{

    const [preview , setPreview] = useState(false);
  
  const handleText = (e) =>{
    setInput(e.target.value)
  }
return (
    <>
    <div className={styles.right_con}>
    <div className={styles.top}>
        <button onClick={() => setPreview(false)}>Write</button>
        <button onClick={() => setPreview(true)}>Preview</button>
       <div>
       <button>H</button>
        <button className={styles.bold}>B</button>
        <button className={styles.italic}>I</button>
        <MdOutlineStrikethroughS role={'button'} tabIndex={0} />
       </div>
       <div>
       <FaLink role='button' tabIndex={0}  />
       <PiQuotesFill role='button' tabIndex={0} />
        <button>/</button>
        <MdPhotoSizeSelectActual  role='button' tabIndex={0}/>
       </div>
       <div>
       <FaList role='button'  tabIndex={0}/>
       <FaListOl  role='button' tabIndex={0}/>
       <FaListCheck  role='button' tabIndex={0}/>
       </div>
    </div>
       <div className={styles.down}>
       {
        preview ? <div className={styles.markdown}> <ReactMarkdown>{input}</ReactMarkdown></div> :
       <div><textarea className={styles.textarea} name="" onChange={(e) => handleText(e)}  value={input} ></textarea></div>
       }
        
       </div>
    </div>
    </>
)

}

export default Right;