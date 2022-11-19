import React,{memo} from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Cross from "../assets/Icon metro-cross.svg"
import ApplicantCard from "./ApplicantCard";
import Curriculum_img from "../assets/curriculum.svg"
const JobApplicant = ({handleClose,data}) => {
  return (
    <>
      <Box className="applicant_modal_wrap">
        <Box className="flex_row" sx={{pb:2,borderBottom:"1px solid grey"}}>
            <Typography className="fs_22">Applicants for this job</Typography>
            <img src={Cross} alt="cross" onClick={handleClose}></img>
        </Box>
        <Typography className="fs_14" sx={{my:1}}>Total {data?.length||"0"} applications</Typography>
        <Box className={data.length?"applicant_box_wrap":"no_applicant_box"}>
          {data.length?data.map((el)=>{
           return <Box key={Math.random()*20}>
            <ApplicantCard {...el}/>
           </Box>
          }):<Box sx={{display:"grid",placeItems:'center'}}>
        <img src={Curriculum_img} alt="cirriculum"></img>
        <Typography className="fs_22 color_dark">No applications available!</Typography>
      </Box>}
        </Box>
      </Box>
    </>
  );
};

export default memo(JobApplicant);
