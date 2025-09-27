import { useState } from "react";
import { TelaEntrada } from "./components/TelaEntrada";
import { PaginaPrincipal } from "./components/PaginaPrincipal";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: ["Montserrat"].join(","),
  },
});

function App() {
  const [mostrarPaginaPrincipal, setMostrarPaginaPrincipal] = useState(false);

  const handleEntrar = () => {
    setMostrarPaginaPrincipal(true);
  };

  return (
    // 3. Envolva todo o aplicativo com o ThemeProvider
    <ThemeProvider theme={theme}>
      {mostrarPaginaPrincipal ? (
        <PaginaPrincipal />
      ) : (
        <TelaEntrada aoEntrar={handleEntrar} />
      )}
    </ThemeProvider>
  );
}

export default App;
