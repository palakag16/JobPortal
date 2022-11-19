import React,{memo} from 'react'
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
const ApplicantCard = (props) => {
  const {name,email,skills}=props
  return (
   <>
   <Box className="applicant_card_wrap">
    <Box className="flex_row" sx={{justifyContent:"start",mb:3}}>
        <Typography className="initial_name">{name[0]??"A"}</Typography>
        <Box sx={{ml:2}}>
            <Typography className="fs_14 color_dark">{name}</Typography>
            <Typography className="fs_14 color_dark" sx={{opacity:0.8}}>{email}</Typography>
        </Box>
    </Box>
    <Box sx={{my:1}}>
    <Typography className="fs_12 color_dark" >Skills</Typography>
    <Typography className="fs_14 color_dark" sx={{opacity:0.8}}>{skills.slice(0,40)}</Typography>
   
    </Box>
   </Box>
   </>
  )
}

export default memo(ApplicantCard);