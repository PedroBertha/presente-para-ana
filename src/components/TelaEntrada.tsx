import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { AnimatedButton } from "./AnimatedButton";

type TelaEntradaProps = {
  aoEntrar: () => void;
};

export function TelaEntrada({ aoEntrar }: TelaEntradaProps) {
  return (
    // 1. O container principal que segura tudo
    <Box
      sx={{
        position: "relative", // Essencial para o posicionamento do vídeo
        height: "100vh",
        width: "100vw",
        overflow: "hidden", // Garante que nada vaze da tela
      }}
    >
      {/* 2. O elemento de vídeo, posicionado no fundo */}
      <Box
        component="video"
        autoPlay
        loop
        muted // MUITO IMPORTANTE: Navegadores bloqueiam autoplay de vídeos com som
        src="/videos/v1.MP4" // O caminho para o seu vídeo na pasta public
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover", // Garante que o vídeo cubra a tela sem distorcer
          zIndex: -2, // Joga o vídeo para o fundo de tudo
        }}
      />

      {/* 3. Um "filtro" escuro por cima do vídeo para legibilidade */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)", // Um preto com 50% de transparência
          zIndex: -1, // Fica entre o vídeo e o conteúdo
        }}
      />
      <Box
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: 2,
          color: "white",
        }}
      >
        <Typography
          variant="h3"
          component="h1"
          gutterBottom
          sx={{ fontWeight: "bold" }}
        >
          Olá, meu amor!
        </Typography>
        <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
          Preparei uma surpresa para você...
        </Typography>
        <AnimatedButton onClick={aoEntrar} />
      </Box>
    </Box>
  );
}
