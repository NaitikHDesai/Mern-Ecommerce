import { Alert, Button, Grid, Snackbar, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAllUsers, getUser, register } from "../../State/Auth/Action";

function RegisterForm({ handlenext }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [openSnackBar, setOpenSnackBar] = useState(false);

  const jwt = localStorage.getItem("jwt");
  const { auth } = useSelector((store) => store);
  const [passwordError, setPasswordError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState(""); // State to track password value

  useEffect(() => {
    if (jwt) {
      dispatch(getUser(jwt));
    }
  }, [jwt, auth.jwt]);

  useEffect(() => {
    dispatch(getAllUsers());
  }, []);

  const handleClose = () => {
    setOpenSnackBar(false);
  };

  const handleEmailChange = (event) => {
    setEmailValue(event.target.value);
    if (emailError) {
      setEmailError("");
    }
  };

  const handlePasswordChange = (event) => {
    setPasswordValue(event.target.value); // Update password value
    if (passwordError) {
      setPasswordError(""); // Clear password error if user starts typing
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const userData = {
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      email: data.get("email"),
      password: data.get("password"),
    };
    const isEmailExist = auth.users.some(
      (user) => user.email === userData.email
    );
    if (isEmailExist) {
      setEmailError("Email already exists in the system");
    } else if (!isPasswordValid(userData.password)) {
      setPasswordError(
        "Password must contain at least 8 characters including uppercase, lowercase, number, and special character."
      );
    } else {
      setOpenSnackBar(true);
      dispatch(register(userData));
    }
  };

  const isPasswordValid = (password) => {
    const passwordRegex =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+}{"':;?/>.<,])(?=.*[a-zA-Z]).{8,}$/;
    return passwordRegex.test(password);
  };

  return (
    <div>
      <Snackbar
        open={openSnackBar}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert
          onClose={handleClose}
          severity={auth.error ? "error" : "success"}
          sx={{ width: "100%" }}
        >
          {auth.error ? auth.error : auth.message}
        </Alert>
      </Snackbar>

      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="firstName"
              name="firstName"
              label="First Name"
              fullWidth
              autoComplete="given-name"
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="lastName"
              name="lastName"
              label="Last Name"
              fullWidth
              autoComplete="given-name"
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              required
              id="email"
              name="email"
              label="Email"
              fullWidth
              autoComplete="given-name"
              error={!!emailError}
              helperText={emailError}
              value={emailValue}
              onChange={handleEmailChange}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              required
              id="password"
              name="password"
              label="Password "
              fullWidth
              autoComplete="password"
              type="password"
              error={!!passwordError}
              helperText={passwordError}
              value={passwordValue} // Set value from state
              onChange={handlePasswordChange} // Handle password change
            />
          </Grid>

          <Grid item xs={12}>
            <Button
              className="bg-[#9155fd] w-full"
              type="submit"
              variant="contained"
              size="large"
              sx={{ padding: ".8rem 0", bgcolor: "#9155fd" }}
            >
              Register
            </Button>
          </Grid>
        </Grid>
      </form>

      <div className="flex justify-center flex-col items-center">
        <div className="py-3 flex items-center">
          <p className="m-0 p-0">Already have an account?</p>
          <Button
            onClick={() => navigate("/login")}
            className="ml-5 "
            size="small"
          >
            Login
          </Button>
        </div>
      </div>
    </div>
  );
}

export default RegisterForm;
