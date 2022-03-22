
import {useState} from "react";
import {makeStyles} from "@mui/styles"




const ReadMoreReadLess = ({children}) => {

    const [isReadMoreShown, setReadMoreShown]=useState(false)
    
    const toggleBtn=() =>{
        setReadMoreShown(prevState=>!prevState)
    }
    
    
    return (
    
        <div  style={{backgroundColor:"#F3F4F4", boxShadow:"0 0 1rem rgba(0,0,0,.1)", padding:"2rem",borderRadius:".5rem"}}>
            
            {isReadMoreShown ? children : children[0]}
            <button style={{transition:"transform 1s", marginRight:"0", backgroundColor:"transparent", border:"none", fontWeight:"500", color:"rgb(139, 17, 209)", cursor:"pointer"}}  onClick={toggleBtn}>{isReadMoreShown ? 'Read Less' : '...ReadMore'}</button>
        </div>
    )
}
export default ReadMoreReadLess;