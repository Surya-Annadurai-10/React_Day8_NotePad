import styles from './Right.module.css'
import { MdOutlineStrikethroughS } from "react-icons/md";
import { PiQuotesFill } from "react-icons/pi";
import { FaLink } from "react-icons/fa";
import { MdPhotoSizeSelectActual } from "react-icons/md";
import { FaList } from "react-icons/fa";
import { FaListOl } from "react-icons/fa";
import { FaListCheck } from "react-icons/fa6";
import { useRef, useState } from 'react';
import  ReactMarkdown from 'react-markdown'

const Right = ({input , setInput}) =>{
  const textArea = useRef(null);
    const previewBtn = useRef(null);
    const writeBtn = useRef(null);
    const [preview , setPreview] = useState(false);
     
    const handleI =() =>{
      let headerStr = stringGenerator(input ,  "*");
      setInput(headerStr)
    }
    
    const handleH = () =>{
        let headerStr = stringGenerator(input ,  "### ");
        setInput(headerStr)
      }

      const handleStrike= () =>{
        let headerStr = stringGenerator(input ,  "~~");
        setInput(headerStr)
      }

      const handleQuotes= () =>{
        let headerStr = stringGenerator(input ,  `""`);
        setInput(headerStr)
      }

      const handleB = () =>{
        let headerStr = stringGenerator(input , "**");
        setInput(headerStr)
      }

      const handleLink = () =>{
        let headerStr = stringGenerator(input , "[]");
        setInput(headerStr)
      }

      const handleTemplate = () =>{
        let headerStr = stringGenerator(input , "``");
        setInput(headerStr)
      }

      const handlePhoto = () =>{
        let headerStr = stringGenerator(input , "![]");
        setInput(headerStr)
      }

    const stringGenerator = (inputVal , notation) =>{
        let str = inputVal.split(" ");
        console.log(str);
        let newStr ;
        let splitStr = str.pop();
        if(notation == "### ")newStr = notation + splitStr;
        else if(notation == "**")  newStr = notation + splitStr + notation;
        else if(notation == "*")  newStr = notation + splitStr+ notation;
        else if(notation == "~~")  newStr = notation +splitStr + notation;
        else if(notation == "[]")  newStr = "[" +splitStr +"](url)"
        else if(notation == `""`)  newStr = '/n' , '> ' + splitStr;
        else if(notation == "``")  newStr = "`" + splitStr+ "`";
        else if(notation == "![]")  newStr = "![](" + splitStr + ")";
       str.push(newStr);
       let resStr = str.join(" ");
       console.log(resStr);
        textArea.select;
         return resStr
           
    }

    const handleWrite = () =>{
      setPreview(false);
      writeBtn.current.style.backgroundColor ="#000"
      writeBtn.current.style.color ="wheat"
      previewBtn.current.style.backgroundColor ="#F0F0F0"
      previewBtn.current.style.color ="black"
    }

    const handlePreview = () =>{
      setPreview(true);
      previewBtn.current.style.backgroundColor ="#000"
      previewBtn.current.style.color ="wheat"
      writeBtn.current.style.backgroundColor ="#F0F0F0"
      writeBtn.current.style.color ="black"
    }

  const handleText = (e) =>{
    setInput(e.target.value)
  }
return (
    <>
    <div className={styles.right_con}>
    <div className={styles.top}>
        <button ref={writeBtn} className={styles.write} onClick={ handleWrite}>Write</button>
        <button ref={previewBtn} className={styles.preview} onClick={handlePreview}>Preview</button>
       <div>
       <button onClick={handleH}>H</button>
        <button  onClick={handleB}  className={styles.bold}>B</button>
        <button  onClick={handleI} className={styles.italic}>I</button>
        <MdOutlineStrikethroughS onClick={handleStrike} role={'button'} tabIndex={0} />
       </div>
       <div>
       <FaLink onClick={handleLink} role='button' tabIndex={0}  />
       <PiQuotesFill onClick={handleQuotes} role='button' tabIndex={0} />
        <button onClick={handleTemplate}>{`</>`}</button>
        <MdPhotoSizeSelectActual onClick={handlePhoto}  role='button' tabIndex={0}/>
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
       <div><textarea ref={textArea } className={styles.textarea} name="" onChange={(e) => handleText(e)}  value={input} ></textarea></div>
       }
        
       </div>
    </div>
    </>
)

}

export default Right;