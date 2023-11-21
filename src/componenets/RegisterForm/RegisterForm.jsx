import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "redux/auth/operations";

import { useNavigate } from "react-router-dom";

export const RegisterForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case "name":
        setName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;

      default:
        break;
    }
  };

  // const handleClick = () => {
  //   navigate("/login", { replace: true });
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(register({ name, email, password }));
    formReset();
  };

  const formReset = () => {
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">
        Name
        <input
          onChange={handleChange}
          type="text"
          name="name"
          value={name}
          id="name"
        />
      </label>
      <label htmlFor="email">
        Email
        <input
          onChange={handleChange}
          type="email"
          name="email"
          value={email}
          id="email"
        />
      </label>
      <label htmlFor="password">
        Password{" "}
        <input
          onChange={handleChange}
          type="password"
          name="password"
          value={password}
          id="password"
        />
      </label>

      <button type="submit">Зареєструватися</button>
    </form>
    // <ThemeProvider theme={defaultTheme}>
    //   <Container component="main" maxWidth="xs" sx={{ pt: "60px" }}>
    //     <CssBaseline />
    //     <Box
    //       sx={{
    //         marginTop: 8,
    //         display: "flex",
    //         flexDirection: "column",
    //         alignItems: "center",
    //       }}
    //     >
    //       <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
    //         <LockOutlinedIcon />
    //       </Avatar>
    //       <Typography component="h1" variant="h5">
    //         Sign up
    //       </Typography>
    //       <Box
    //         component="form"
    //         noValidate
    //         onSubmit={handleSubmit}
    //         sx={{ mt: 3 }}
    //       >
    //         <Grid container spacing={2}>
    //           <Grid item xs={12}>
    //             <TextField
    //               autoComplete="given-name"
    //               name="name"
    //               required
    //               fullWidth
    //               id="name"
    //               label="Name"
    //               autoFocus
    //               onChange={handleChange}
    //               value={name}
    //             />
    //           </Grid>
    //           <Grid item xs={12}>
    //             <TextField
    //               required
    //               fullWidth
    //               id="email"
    //               label="Email Address"
    //               name="email"
    //               autoComplete="email"
    //               onChange={handleChange}
    //               value={email}
    //             />
    //           </Grid>
    //           <Grid item xs={12}>
    //             <TextField
    //               required
    //               fullWidth
    //               name="password"
    //               label="Password"
    //               type="password"
    //               id="password"
    //               autoComplete="new-password"
    //               onChange={handleChange}
    //               value={password}
    //             />
    //           </Grid>
    //         </Grid>
    //         <Button
    //           type="submit"
    //           fullWidth
    //           variant="contained"
    //           sx={{
    //             "&:hover": {
    //               backgroundColor: "#05888da2",
    //             },
    //             mt: 3,
    //             mb: 2,
    //             backgroundColor: "#05888d",
    //             border: "2px solid transparent",
    //           }}
    //         >
    //           Sign Up
    //         </Button>
    //         <Grid container justifyContent="flex-end">
    //           <Grid item>
    //             <ButtonBase
    //               variant="body2"
    //               onClick={handleClick}
    //               sx={{
    //                 border: "2px solid transparent",
    //               }}
    //             >
    //               {"Already have an account? Sign in"}
    //             </ButtonBase>
    //           </Grid>
    //         </Grid>
    //       </Box>
    //     </Box>
    //   </Container>
    // </ThemeProvider>
  );
};
