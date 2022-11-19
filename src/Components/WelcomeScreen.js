import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {useNavigate} from "react-router-dom"

const WelcomeScreen = () => {
    const navigate= useNavigate();
  document.body.style.height = "100vh";

  return (
    <Box sx={{ display: "grid", placeItems: "center", height: "80vh" }}>
      <Box sx={{ mb: "3rem" }}>
          <Typography className="fs_60 color_white"sx={{lineHeight:1}} >
              Welcome to
            </Typography>
            <Typography className="fs_60 color_white" sx={{textAlign:"center"}}>
              My<span className="color_blue">Jobs</span>
            </Typography>
        <Typography
          className="get_started font_fam color_white"
          sx={{
            mt: "1.5rem",
            width: "100%",
            textAlign: "center",
            cursor: "pointer",
          }}
          onClick={()=>navigate("/home")}
        >
          Get Started
        </Typography>
      </Box>
    </Box>
  );
};

export default WelcomeScreen;
