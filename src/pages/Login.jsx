import { Box, Button, Paper, TextField } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { customPaper } from "../theme/Theme";

function Login() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  async function submit(data) {
    try {
      const res = await axios.post("http://rezayari.ir:5050/Auth/Login", data);
      localStorage.setItem("token", res.data.token);
      navigate("/home");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  }
  return (
    <div>
      <Toaster position="top-center" reverseOrder={false} />

      <form onSubmit={handleSubmit(submit)}>
        <Paper sx={customPaper}>
          <Box display={"flex"} flexDirection={"column"} gap={"20px"}>
            <TextField
              label="نام کاربری"
              variant="outlined"
              {...register("username")}
            />
            <TextField
              label="رمز عبور"
              variant="outlined"
              {...register("password")}
            />
          </Box>

          <Button variant="contained" fullWidth type="submit">
            ورود
          </Button>
        </Paper>
      </form>
    </div>
  );
}

export default Login;
