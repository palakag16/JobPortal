import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import { ToastContainer, toast } from "react-toastify";
import {
  adminInfoGetterService,
  adminInfoRemovalService,
} from "../Shared/Service";
const TopHeading = () => {
  const navigate = useNavigate();
  const jobauth = adminInfoGetterService("My-job");
  const Profilename = adminInfoGetterService("name");
  const [log_btn, setbtn] = useState(false);
  const toggle_btn = () => {
    setbtn((prev) => !prev);
  };
  const Logout = () => {
    adminInfoRemovalService("My-job");
    adminInfoRemovalService("name");
    toast.info("You have successfully logged out.", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    setbtn(false);
    navigate("/");
  };
  return (
    <>
      <Box className="flex_row border_line" sx={{ pb: "0.5rem" }}>
        <Typography className="fs_22 color_white">
          My<span className="color_blue">Jobs</span>
        </Typography>
        {jobauth ? (
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography className="initial_name">
              {Profilename?.[0] || "A"}
            </Typography>
            <ArrowDropDownIcon className="color_white" onClick={toggle_btn} />
          </Box>
        ) : (
          <Typography
            className="font_fam login_btn color_white"
            onClick={() => navigate("/login")}
            sx={{cursor:"pointer"}}
          >
            Login
          </Typography>
        )}
      </Box>
      {log_btn ? (
        <Box
          sx={{ display: "flex", justifyContent: "end", postion: "relative" }}
        >
          <ArrowDropUpIcon
            sx={{ position: "absolute", color: "white", mt: "-0.89rem" }}
          />
          <Typography className="logout_btn fs_14 color_dark" onClick={Logout} sx={{cursor:"pointer"}}>
            Logout
          </Typography>
        </Box>
      ) : null}
      <ToastContainer/>
    </>
  );
};

export default TopHeading;
