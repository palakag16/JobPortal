import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Home_icon from "../assets/Icon ionic-md-home.svg";
import Jobcard from "../Components/Jobcard";
import Modal from "@mui/material/Modal";
import JobApplicant from "../Components/JobApplicant";
import { getJobs, getApplicants } from "../Shared/Services/LoginServices";
import { ToastContainer, toast } from "react-toastify";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
const Home = () => {
  document.body.classList.add("newbody");
  document.body.style.height = "100%";
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const [jobs, setJobs] = useState([]);
  const [applicants, setApplicants] = useState([]);
  const [page, setPage] = useState({ currentpage: 1, total: 0 });

  const handleOpen = async (id) => {
    if (id) {
      try {
        const res = await getApplicants(id);
        if (res.success) {
          setApplicants(res.data);
        }
      } catch (error) {
        console.log(error);
      }
    }
    setOpen(true);
  };
  const fetchJobs = async (p) => {
    try {
      const res = await getJobs(p);
      if (res?.data?.data) {
        setJobs(res?.data?.data);
        const count = res?.data?.metadata?.count;
        setPage({ ...page, total: count });
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchJobs(page.currentpage);
  }, [page.currentpage]);

  const prev = () => {
    const curr_page = page.currentpage;
    if (curr_page > 1) {
      setPage({ ...page, currentpage: curr_page - 1 });
    }
  };
  const next = () => {
    const curr_page = page.currentpage;
    const max = Math.ceil(page.total / 20);
    if (curr_page < max) {
      setPage({ ...page, currentpage: curr_page + 1 });
    }
  };
  useEffect(() => {
    toast.info("Login You have successfully logged in.", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }, []);

  return (
    <>
      <Box sx={{ px: "6rem", mt: 2 }}>
        <Box>
          <img src={Home_icon} alt="home"></img>{" "}
          <Typography variant="span" className="fs_12 color_white">
            Home
          </Typography>
        </Box>
        <Typography className="fs_22 color_white " sx={{ my: "20px" }}>
          Jobs posted by you
        </Typography>
       {jobs.length? <Box className="job_card_section">
          {jobs.map((el) => {
            return (
              <Box key={Math.random() * 100}>
                <Jobcard handleOpen={handleOpen} {...el}></Jobcard>
              </Box>
            );
          })}
        </Box>:<Box>Please refresh again</Box>}
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            height: "100%",
            width: "100%",
            display: "grid",
            placeItems: "center",
          }}
        >
          <JobApplicant handleClose={handleClose} data={applicants} />
        </Box>
      </Modal>
      {/* pagination */}
      <Box className="flex_row" sx={{ justifyContent: "center", my: 5 }}>
        <Box className="flex_row" sx={{ width: "7rem" }}>
          <Typography className="pagination_btn" onClick={prev}>
            <ArrowLeftIcon className="color_light" />
          </Typography>
          <Typography
            className="pagination_btn color_dark"
            c
            sx={{ background: "rgba(67, 175, 255, 0.2)" }}
          >
            {page.currentpage}
          </Typography>
          <Typography className="pagination_btn" onClick={next}>
            <ArrowRightIcon className="color_light" />
          </Typography>
        </Box>
      </Box>
      <ToastContainer />
    </>
  );
};

export default Home;
