import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import dash_img from "../assets/Screenshot 2020-09-21 at 2.06.52 PM.png";
const Dashboard = () => {
  document.body.style.height="100%";
  document.body.classList.remove("newbody");
  return (
    <>
      <Box sx={{ px: "8rem" }}>
        <Box sx={{ my: "2rem", alignItems: "start" }} className="flex_row">
          <Box sx={{ mt: "1.5rem" }}>
            <Typography className="fs_60 color_white" sx={{ lineHeight: 1.2 }}>
              Welcome to
            </Typography>
            <Typography className="fs_60 color_white" sx={{ lineHeight: 1.2 }}>
              My<span className="color_blue">Jobs</span>
            </Typography>
            <Typography
              className="get_started font_fam color_white"
              sx={{ mt: "1.5rem" }}
            >
              Get Started
            </Typography>
          </Box>
          <img src={dash_img} alt="dash_img" height={395}></img>
        </Box>
        <Box>
          <Typography className="fs_22" sx={{ color: "#303F60" }}>
            Why us
          </Typography>
          <Box className="flex_row" sx={{mt:"2rem"}}>
            <Box className="why_us_box">
                <Typography className="fs_22 color_blue" sx={{width:"50%",pb:"0.5rem"}}>Get More Visibility</Typography>
                <Typography className="fs_14" sx={{color:"#303F60",mb:"25px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</Typography>
            </Box>
            <Box className="why_us_box">
                <Typography className="fs_22 color_blue" sx={{width:"50%",pb:"0.5rem"}}>Get More Visibility</Typography>
                <Typography className="fs_14" sx={{color:"#303F60",mb:"25px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</Typography>
            </Box>
            <Box className="why_us_box">
                <Typography className="fs_22 color_blue" sx={{width:"50%",pb:"0.5rem"}}>Get More Visibility</Typography>
                <Typography className="fs_14" sx={{color:"#303F60",mb:"25px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Dashboard;
