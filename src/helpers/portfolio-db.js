import Caniada from "../images/projects/Caniada.png";
import SuperHero from "../images/projects/super-hero-web.png";
import Combina from "../images/projects/Combina.png";
import Minorfy from "../images/projects/Minorfy.png";
import Uploader from "../images/projects/Uploader.png";

export const portfolioDB = [
  {
    title: "Caniada e-commerce",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis eveniet, incidunt ad animi minus, doloribus velit quae aliquid reiciendis !",
    techs: ["Express", "MySQL", "MVC"],
    link: "http://grupo6-caniada.herokuapp.com/",
    repo: "https://github.com/NelsonLoto/grupo_6_caniadaDesigns",
    image: Caniada,
  },
  {
    title: "Music player",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis eveniet, incidunt ad animi minus, doloribus velit quae aliquid !",
    techs: ["React"],
    link: "http://minorfy.herokuapp.com/",
    repo: "https://github.com/fletech/minorfy-musicplayer",
    image: Minorfy,
  },

  {
    title: "Photo Portfolio",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis eveniet, incidunt ad animi minus, doloribus velit quae aliquid !",
    techs: ["React", "Framer-motion", "styled-components"],
    link: "http://fotocom.herokuapp.com/",
    repo: "https://github.com/fletech/combina-foto",
    image: Combina,
    building: true,
  },
  {
    title: "SuperHero Challange",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis eveniet, incidunt ad animi minus, doloribus velit quae aliquid !",
    techs: ["React", "styled-components"],
    link: "http://alkemy-react-challenge.vercel.app/",
    repo: "https://github.com/fletech/alkemy-react-challenge",
    image: SuperHero,
    building: true,
  },
];
