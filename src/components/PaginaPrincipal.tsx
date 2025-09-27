// src/components/PaginaPrincipal.tsx
import Box from '@mui/material/Box';
import { CarrosselFotos } from './CarrosselFotos';
import { MusicPlayer } from './MusicPlayer';


export function PaginaPrincipal() {

  return (
    <Box sx={{ height: '100vh', width: '100vw', position: 'relative', bgcolor: '#000' }}>
      <CarrosselFotos />

      {/* O Player agora não precisa de nenhuma propriedade extra */}
      <MusicPlayer src="/music/music.mp3" />
      
      
    </Box>
  );
}