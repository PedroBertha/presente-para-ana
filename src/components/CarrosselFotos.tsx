// src/components/CarrosselFotos.tsx
import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Navigation, A11y, EffectFade, Mousewheel } from "swiper/modules";
import AOS from "aos";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Typography from "@mui/material/Typography";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "aos/dist/aos.css";

import { slideData } from "../data/slides";

export function CarrosselFotos() {
  const swiperRef = useRef<SwiperCore | null>(null);

  // Removi a lógica do Modal daqui pois ela não é mais necessária no carrossel
  
  useEffect(() => {
    AOS.init({ duration: 800, once: false });
  }, []);

  const handlePrev = () => {
    swiperRef.current?.slidePrev();
  };

  const handleNext = () => {
    swiperRef.current?.slideNext();
  };

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        direction={"horizontal"}
        modules={[Navigation, A11y, EffectFade, Mousewheel]}
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        effect={"fade"}
        mousewheel={true}
        className="myHorizontalSwiper"
        onSlideChange={() => AOS.refresh()}
      >
        {slideData.map((slide, index) => {
          // Se for o slide final, renderiza a CARTA
          if (slide.type === "final_slide") {
            return (
              <SwiperSlide key={index} className="final-slide">
                <div className="final-slide-content">
                  <Typography variant="h4" data-aos="fade-up">
                    {slide.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    data-aos="fade-up"
                    data-aos-delay="200"
                    sx={{ mt: 3, whiteSpace: "pre-line", textAlign: "left" }}
                  >
                    {slide.letter}
                  </Typography>
                </div>
              </SwiperSlide>
            );
          }

          // CORREÇÃO: Colocando a estrutura do slide de foto de volta
          return (
            <SwiperSlide key={index}>
              <div className="slide-container">
                {/* CAMADA 1: O fundo desfocado que preenche a tela */}
                <div
                  className="slide-background-image"
                  style={{ backgroundImage: `url(${slide.image})` }}
                ></div>

                {/* CAMADA 2: A imagem principal, nítida e sem cortes */}
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="slide-foreground-image"
                />

                {/* CAMADA 3: O texto, por cima de tudo */}
                <div className="horizontal-slide-text">
                  <h2 data-aos="fade-up">{slide.title}</h2>
                  <p data-aos="fade-up" data-aos-delay="200">
                    {slide.description}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      {/* As setas de navegação laterais */}
      <IconButton
        onClick={handlePrev}
        sx={{
          position: "absolute",
          top: "50%",
          left: { xs: 10, md: 32 },
          transform: "translateY(-50%)",
          zIndex: 10,
          color: "white",
          backgroundColor: "rgba(0, 0, 0, 0.3)",
          "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.5)" },
        }}
      >
        <ArrowBackIosNewIcon />
      </IconButton>
      <IconButton
        onClick={handleNext}
        sx={{
          position: "absolute",
          top: "50%",
          right: { xs: 10, md: 32 },
          transform: "translateY(-50%)",
          zIndex: 10,
          color: "white",
          backgroundColor: "rgba(0, 0, 0, 0.3)",
          "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.5)" },
        }}
      >
        <ArrowForwardIosIcon />
      </IconButton>
    </Box>
  );
}