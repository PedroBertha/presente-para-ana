// src/data/slides.ts
export interface Slide {
  image?: string;
  title?: string;
  description?: string;
  type?: "final_slide";
  letter?: string;
}

export const slideData: Slide[] = [
  //   1
  {
    image: "/imag/sarau.jpg",
    title: "Meu amor",
    description: "Um dia antes do namoro.",
  },
  //   2
  {
    image: "/imag/ofc.jpg",
    title: "Meu Dengo",
    description: "Oficialmente namorados.",
  },
  //   3
  {
    image: "/imag/quetal.jpg",
    title: "Meu bem",
    description: "De aliança bixa veia",
  },
  //   4
  {
    image: "/imag/quadro.JPG",
    title: "Minha vida",
    description: "Nosso primeiro quadro.",
  },
  //   5
  {
    image: "/imag/viagem2.jpg",
    title: "Minhda denga",
    description: "Nossa primeira viagem.",
  },
  //   6
  {
    image: "/imag/viagem.jpg",
    title: "Minha linda",
    description: "Nossa primeiro natal.",
  },
  //   7
  {
    image: "/imag/festa.jpg",
    title: "Meu tudo",
    description: "Nossa aprimeira festa.",
  },
  //   8
  {
    image: "/imag/cafe.jpg",
    title: "Meu chuchu",
    description: "Amo nossos cafés.",
  },
  //   9
  {
    image: "/imag/aventura.JPG",
    title: "Minha Deusa",
    description: "Nossas aventuras de moto.",
  },
  //   10
  {
    image: "/imag/forte.jpg",
    title: "Minha braçuda",
    description: "Casal de fitnes, ou quase.",
  },
  //   11
  {
    image: "/imag/felix.jpg",
    title: "Minah cachinhos",
    description: "Fotos que tiramos pós comer bergamota.",
  },
  //   12
  {
    image: "/imag/morro.jpg",
    title: "Meu raio de sol",
    description: "Primeira vez no morro agudo.",
  },
  //   13
  {
    image: "/imag/linda.jpg",
    title: "Carta ->",
  },
  {
    type: "final_slide",
    title: "Uma última coisa...", 
    letter: `Meu amor,

Meu bem, talvez essa carta (ta mais para web carta) tenha alguns erros de português, mas está tudo bem, é com os erros que aprendemos, assim como nós. 

Ao longo desse um ano eu aprendi tanta coisa contigo, a ter um vida financeira organizada,a esperar ao invés de ser afobado, me esnionou a escutar mais e o ensinamento que eu vou levar param sembre, é que nem tudo tem que ser como eu espero para ser bom. 

Esse foi nosso primeiro ano juntos, primeiro de muitos que virão. Eu espero poder ficar velho ao seu ladopara poder ver todas as fazes, mudanças, conquistas, sonhos sendo realizados. Quero amar cada parte da sua vida, da nossa vida por completo. 

Espero que tenha gostado do presente, não pude comprar nada, mas saiba queessa pagina? site? landing page? como quiser chamar, foi feita com muito amor

Com todo o meu amor
Pedro H. Likoski BERTHA`,
  },
];
