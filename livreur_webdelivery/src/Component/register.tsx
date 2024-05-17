import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import MenuItem from "@mui/material/MenuItem";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const defaultTheme = createTheme();

function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="/">
        WEB Delivery
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

function ClientForm() {
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [username, setUsername] = useState("");
  const [telephone, setTelephone] = useState("");
  const [sexe, setSexe] = useState("");
  const [adresse, setAdresse] = useState("");
  const [prenom, setPrenom] = useState("");
  const navigate = useNavigate();
  const handleCreateClient = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    // Validate that the password and confirm password fields match
    if (password !== confirmPassword) {
      console.error("Passwords do not match!");
      // Handle password mismatch (e.g., show an error message)
      return;
    }

    // Ensure sexe is either "Homme" or "Femme"
    if (sexe !== "Homme" && sexe !== "Femme") {
      console.error("Invalid sexe value. Please select either Homme or Femme.");
      // Handle invalid sexe value (e.g., show an error message)
      return;
    }

    // Ensure telephone only contains numbers
    if (!/^\d+$/.test(telephone)) {
      console.error("Telephone should only contain numbers.");
      // Handle invalid telephone value (e.g., show an error message)
      return;
    }

    try {
      const response = await axios.post("http://localhost:8085/RegisterLivreur", {
        nom,
        email,
        password,
        username,
        telephone,
        sexe,
        adresse,
        prenom,
      });

      console.log("Client creation successful:", response.data);
      navigate("/");
    } catch (error) {
      console.error("Client creation failed:", error);
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <div style={{ top: "50px" }}>
        <Container component="main" maxWidth="xs" sx={{ marginTop: "1vh" }}>
          <CssBaseline />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Create Client
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleCreateClient}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    name="prenom"
                    required
                    fullWidth
                    id="prenom"
                    label="First Name"
                    value={prenom}
                    onChange={(e) => setPrenom(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="nom"
                    label="Last Name"
                    name="nom"
                    value={nom}
                    onChange={(e) => setNom(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email"
                    name="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="confirmPassword"
                    label="Confirm Password"
                    type="password"
                    id="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="username"
                    label="Username"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="telephone"
                    label="Telephone"
                    id="telephone"
                    type="tel" // Change type to "tel" for better mobile support
                    value={telephone}
                    onChange={(e) => setTelephone(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    select
                    name="sexe"
                    label="Sexe"
                    id="sexe"
                    value={sexe}
                    onChange={(e) => setSexe(e.target.value)}
                  >
                    <MenuItem value="Homme">Homme</MenuItem>
                    <MenuItem value="Femme">Femme</MenuItem>
                  </TextField>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="adresse"
                    label="Adresse"
                    id="adresse"
                    value={adresse}
                    onChange={(e) => setAdresse(e.target.value)}
                  />
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  S'enregistrer
                </Button>
              </Grid>
            </Box>
          </Box>
          <Copyright sx={{ mt: 5 }} />
        </Container>
      </div>
    </ThemeProvider>
  );
}

export default ClientForm;
