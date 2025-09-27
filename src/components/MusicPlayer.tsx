// src/components/MusicPlayer.tsx
import { useState, useRef, useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Slider from '@mui/material/Slider';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import Stack from '@mui/material/Stack';

type MusicPlayerProps = {
  src: string;
};

export function MusicPlayer({ src }: MusicPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const formatTime = (time: number) => new Date(time * 1000).toISOString().slice(14, 19);

  const togglePlayPause = () => {
    if (isPlaying) audioRef.current?.pause();
    else audioRef.current?.play();
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    setTimeout(() => {
      audioRef.current?.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));
    }, 500);
  }, []);

  const handleTimeUpdate = () => setCurrentTime(audioRef.current?.currentTime || 0);
  const handleLoadedMetadata = () => setDuration(audioRef.current?.duration || 0);
  const handleSeek = (_: Event, val: number | number[]) => { if (audioRef.current) audioRef.current.currentTime = val as number; };

  return (
    // O container principal agora é transparente e apenas posiciona os controles
    <Box
      sx={{
        position: 'absolute',
        bottom: '20px', // Um pouco de espaço da borda inferior
        left: '50%',
        transform: 'translateX(-50%)', // Centraliza o container
        width: '100%',
        maxWidth: '500px', // Largura máxima dos controles
        zIndex: 20,
        color: 'white',
        p: '0 24px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      {/* Controles de Play/Pause/Avançar/Voltar */}
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <IconButton sx={{ color: 'white' }}><SkipPreviousIcon sx={{ fontSize: 30 }} /></IconButton>
        <IconButton onClick={togglePlayPause} sx={{ color: 'white', mx: 1 }}>
          {isPlaying ? <PauseIcon sx={{ fontSize: 45 }} /> : <PlayArrowIcon sx={{ fontSize: 45 }} />}
        </IconButton>
        <IconButton sx={{ color: 'white' }}><SkipNextIcon sx={{ fontSize: 30 }} /></IconButton>
      </Box>

      {/* Barra de Progresso com os Tempos */}
      <Stack spacing={2} direction="row" alignItems="center" sx={{ width: '100%' }}>
        <Typography variant="caption" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>{formatTime(currentTime)}</Typography>
        <Slider value={currentTime} max={duration || 0} onChange={handleSeek} size="small" sx={{ color: 'white' }} />
        <Typography variant="caption" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>{formatTime(duration)}</Typography>
      </Stack>
      
      {/* O áudio continua aqui, invisível */}
      <audio ref={audioRef} src={src} onLoadedMetadata={handleLoadedMetadata} onTimeUpdate={handleTimeUpdate} onEnded={() => setIsPlaying(false)} />
    </Box>
  );
}