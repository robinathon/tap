import {Box} from "@mui/material"
import {makeStyles} from "@mui/styles"
import Image from "next/image"
import Head from "next/head"
import ReadMoreReadLess from "./ReadMoreReadLess"
const useStyles=makeStyles((theme) => ({
  container: {height:"auto" ,width:"85vw" ,paddingRight:"35px" ,boxShadow:"0 0 1rem rgba(0,0,0,.1)",borderRadius:".5rem",margin:"auto", display:"flex", justifyContent:"center", alignment:"center",color:"#484F6C", backgroundColor:"#F3F4F4"},
  image:{paddingTop:"22px",margin:"4%",position:"realtive"},
  message:{fontFamily: "Lora, serif",weight: "400"},
  dName:{fontFamily: "Lora, serif",weight: "700"},
  msgp:{alignItems:"center", justifyContent:"center"},



  [theme.breakpoints.between('xs','sm')]:{
    container:{
                display: "flex",
                flexDirection: "column",
                justifyContent:"center",
                alignItems:"center",
  },
  header:{
    textAlign:"center",
  },
  message:{
    marginLeft :"5px",
    width:"105%"
  },
  image:{
    width:"100px",
    height:"100px"
  }
  }

}));

const index = () => {
  const classes = useStyles()
  return (
    <>
    
    <Head>
      
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
      <link href="https://fonts.googleapis.com/css2?family=Lora:wght@400;700&family=Poppins:ital,wght@0,100;1,100&display=swap" rel="stylesheet"/>
    </Head>
    <Box  className={classes.container}>

      <Box className={classes.image}>
        <Image src="/../public/director.png" width={470} height={470}/>
      </Box>
      <Box >
      <h2 className={classes.header}>Director's Message</h2>
      <p className={classes.message}>
        <ReadMoreReadLess>
        <p className="msgp" >
      Evolving a brand-name takes years of nurturing, hard work and passion.
      IIIT Ranchi, which started its journey in 2015, has brought in the
      culture of innovation among its students. These students have received
      training that is ‘deep in depth’, yet ‘wide in breadth’. Such training has
      moulded them into better qualified professionals.
    </p>
    
    <p className="msgp">
      At the Indian Institute of Information Technology Ranchi, we are
      committed to playing a key role in creating an ambience for the creation
      of new ideas, knowledge and graduates who will be tech-leaders of
      tomorrow.
    </p>
    
    <p className="msgp">
      {" "}
      We are convinced that in order to make significant contributions to the
      development of the country and to the improvement in quality of life of
      its citizens, we will need to pursue a strategy that fosters creativity,
      supports interdisciplinary research and education. This will provide the
      students with an understanding and appreciation not only of the process of
      knowledge creation, but also of the process by which technology and
      knowledge may be used to create wealth as well as achieve social and
      economic goals.
    </p>
    
    <p className="msgp">
      Therefore, I am quite confident that our students shall perform the best
      on any platform and do justice to the trust placed on them.
    </p>
        </ReadMoreReadLess>
      </p>
      <h3 className={classes.dName}>
        Prof. Vishnu Priye
      </h3>
      <p className={classes.message}>
        Director of IIIT Ranchi
      </p>

      </Box>    
    </Box>
    
    
    </>
    
  )
}

export default index;