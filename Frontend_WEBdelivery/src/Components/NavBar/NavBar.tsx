import { useState } from "react";
import { PaletteMode } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import AppAppBar from "./AppBar";
import { Box } from "@mui/material";

const NavBar = () => {
  const [mode, setMode] = useState<PaletteMode>("light");

  // Fonction pour basculer entre les modes de couleur
  const toggleColorMode = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  // Créer un thème avec le mode de couleur
  const theme = createTheme({
    palette: {
      mode,
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* Intégrez le composant AppAppBar en passant les props appropriées */}
      <AppAppBar mode={mode} toggleColorMode={toggleColorMode} />
    </ThemeProvider>
  );
};

export default NavBar;
