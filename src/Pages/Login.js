import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import {verifyCreds} from "../Shared/Services/LoginServices"
import {adminInfoStorageService} from "../Shared/Service";
import {useNavigate} from "react-router-dom"
const Login = () => {
  const navigate = useNavigate();
  document.body.classList.remove("newbody");
  document.body.style.height = "100vh";
  const creds = { Email: "squareboat@gmail.com", Password: "squareboat" };
  const [data, setData] = useState({ email: "", password: "" });
  const [validate, setValidation] = useState({ mail: false, pass: false });
  const fetchData = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value });
  };
  const SubmitForm = async() => {
    const { Email, Password } = creds;
    const { email, password } = data;
    setValidation({
      ...validate,
      mail: email !== Email ? true : false,
      pass: Password !== password ? true : false,
    });
    try {
      if(email===Email&&password===Password){
        const res = await verifyCreds(data);
        if(res.success){
          adminInfoStorageService("My-job",res.data.token) 
          adminInfoStorageService("name",res.data.name) 
          setTimeout(() => {
            navigate("/welcome");
          }, 500);
        }
      }
    } catch (error) {
      console.log(error)
    }

  };

  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box className="login_wrapped">
          <Typography className="fs_22 color_dark">Login</Typography>
          <Box>
            <Box sx={{ py: "0.5rem" }}>
              <Typography className="fs_14 color_dark">
                Email address
              </Typography>
              <TextField
                variant="outlined"
                disableripple="true"
                error={validate.mail}
                name="email"
                helperText={
                  validate.mail ? "Please enter a valid email address" : ""
                }
                value={data.email}
                sx={{ width: "100%" }}
                inputProps={{
                  placeholder: "Enter Email",
                }}
                onChange={fetchData}
              ></TextField>
            </Box>
            <Box sx={{ py: "0.5rem" }}>
              <Typography className="fs_14 color_dark"> Password</Typography>
              <TextField
                variant="outlined"
                type="password"
                error={validate.pass}
                onChange={fetchData}
                value={data?.password}
                helperText={
                  validate.pass ? "Please enter a valid Password" : ""
                }
                disableripple="true"
                name="password"
                sx={{ width: "100%" }}
                inputProps={{
                  placeholder: "Enter your password",
                }}
              ></TextField>
            </Box>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center", mb: "3rem" }}>
            <Typography
              className="get_started font_fam color_white"
              sx={{ mt: "1.5rem", width: "20%", textAlign: "center",cursor:"pointer" }}
              onClick={SubmitForm}
            >
              Login
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Login;
