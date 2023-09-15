import { Box, Text, Spinner } from "@chakra-ui/react";
import React, { useState } from "react";
import styles from "../styles/login.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [loader, setLoader] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);
    if (email === "demo@gmail.com" && password === "demo@123") {
      setTimeout(() => {
        setLoader(false);
        let token = tokenGenreator();
        localStorage.setItem("myjobtoken", JSON.stringify(token));
        navigate("/");
      }, 1000);
    } else {
      setTimeout(() => {
        toast.error("Invalid Credentials !");
        setLoader(false);
      }, 2000);
    }
  };

  const tokenGenreator = () => {
    return Math.random().toString(36).substring(2);
  };

  return (
    <Box>
      <Box className={styles.container}>
        <Box className={styles.loginCard}>
          <Text className={styles.heading}>Login to the job portal</Text>
          <form onSubmit={handleSubmit}>
            <Box className={styles.inputs}>
              <label>Email</label>
              <input
                type="email"
                placeholder="Enter your Email"
                required
                onChange={(e) => setMail(e.target.value)}
              />
            </Box>
            <Box className={styles.inputs}>
              <label>Password</label>
              <input
                type="password"
                placeholder="Enter your Password"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </Box>
            <button className={styles.submitBtn} type="submit">
              {loader ? <Spinner /> : "Sign in"}
            </button>
            <ToastContainer />
          </form>

          <Text textAlign={"start"} fontWeight={600} mt={2} color={"#6E40FF"}>
            Forget Password?
          </Text>
          <Text mt={5} fontWeight={600}>
            Don't have account? <a href="/signup">Create Account</a>
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
