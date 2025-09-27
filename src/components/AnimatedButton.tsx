// src/components/AnimatedButton.tsx
import Button from '@mui/material/Button';
import Box from '@mui/material/Box'; // Usaremos o Box para os spans

// Nosso novo botão animado vai receber a mesma função 'onClick'
type AnimatedButtonProps = {
  onClick: () => void;
};

export function AnimatedButton({ onClick }: AnimatedButtonProps) {
  return (
    <Button
      onClick={onClick}
      variant="contained" // Usamos uma variante do MUI como base
      sx={{
        borderRadius: '12px',
        border: '3px outset #888',
        position: 'relative',
        display: 'inline-block',
        padding: '10px 20px',
        color: '#eee',
        textTransform: 'uppercase',
        letterSpacing: '2px',
        overflow: 'hidden', // Muito importante para a animação
        boxShadow: '0 0 10px rgb(0, 0, 0, 1)',
        fontFamily: 'Montserrat, sans-serif', // Usando nossa fonte do projeto
        fontSize: '14px',
        fontWeight: 'bolder',
        textDecoration: 'none',
        background: 'linear-gradient(160deg, #666, #444)',
        textShadow: '0px 0px 2px rgba(0, 0, 0, .5)',
        transition: '0.2s',

        // --- Estilos do estado ':active' (quando o botão está pressionado) ---
        '&:active': {
          border: '3px outset #ddd',
          color: '#fff',
          background: 'linear-gradient(160deg, #666, #444)',
          textShadow: '0px 0px 4px #ccc',
          boxShadow: '0 0 10px #fff, 0 0 40px #fff, 0 0 80px #fff',
          transitionDelay: '1s',
        },

        // --- Estilos para os 4 SPANS (a mágica da animação) ---
        // '& span' seleciona todos os spans dentro do botão
        '& span': {
          position: 'absolute',
          display: 'block',
        },

        // --- Animação do SPAN 1 (borda de cima) ---
        '& span:nth-of-type(1)': {
          top: 0,
          left: '-100%',
          width: '100%',
          height: '2px',
          background: 'linear-gradient(90deg, transparent, #eee)',
        },
        '&:active span:nth-of-type(1)': {
          left: '100%',
          transition: '1s',
        },

        // --- Animação do SPAN 2 (borda da direita) ---
        '& span:nth-of-type(2)': {
          top: '-100%',
          right: 0,
          width: '2px',
          height: '100%',
          background: 'linear-gradient(180deg, transparent, #eee)',
        },
        '&:active span:nth-of-type(2)': {
          top: '100%',
          transition: '1s',
          transitionDelay: '0.25s',
        },

        // --- Animação do SPAN 3 (borda de baixo) ---
        '& span:nth-of-type(3)': {
          bottom: 0,
          right: '-100%',
          width: '100%',
          height: '2px',
          background: 'linear-gradient(270deg, transparent, #eee)',
        },
        '&:active span:nth-of-type(3)': {
          right: '100%',
          transition: '1s',
          transitionDelay: '0.5s',
        },

        // --- Animação do SPAN 4 (borda da esquerda) ---
        '& span:nth-of-type(4)': {
          bottom: '-100%',
          left: 0,
          width: '2px',
          height: '100%',
          background: 'linear-gradient(360deg, transparent, #eee)',
        },
        '&:active span:nth-of-type(4)': {
          bottom: '100%',
          transition: '1s',
          transitionDelay: '0.75s',
        },
      }}
    >
      
      Clique para ver 
      
      {/* Os 4 spans que o CSS usa para animar */}
      <Box component="span" />
      <Box component="span" />
      <Box component="span" />
      <Box component="span" />
    </Button>
  );
}