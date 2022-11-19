import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Location from "../assets/Icon material-location-on.svg";
const Jobcard = ({ handleOpen, ...props }) => {
  const { title, description, location, id } = props;
  return (
    <>
      <Box className="job_card_wrapper" >
        <Typography className="color_dark">{title.slice(0,20)}</Typography>
        <Typography
          className="fs_14 color_dark"
          variant="p"
          sx={{
            opacity: "0.8",
            letterSpacing: 0,
            lineHeight: "16px",
            wordWrap: "break-word",
          }}
        >
          {description.slice(0,25)}
        </Typography>
        <Box sx={{ mt: 3,width:"100%" }} className="flex_row">
          <Box sx={{ display: "flex",width:"45%" }}>
            <img src={Location} alt="location"></img>
            <Typography
              className="fs_14 color_dark"
              sx={{ opacity: 0.8, ml: "9px", wordWrap:"break-word",width:"60%" }}
            >
              {location.slice(0,6)}
            </Typography>
          </Box>
          <Typography
            className="fs_12 color_dark view_app_btn"
            sx={{width:"50%"}}
            onClick={()=>handleOpen(id)}
          >
            View Application
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default Jobcard;
