import Caniada from "../images/projects/Caniada.png";
import SuperHero from "../images/projects/super-hero-web.png";
import Combina from "../images/projects/Combina.png";
import Minorfy from "../images/projects/Minorfy.png";
import Treintaonce from "../images/projects/Treintaonce.png";

export const portfolioDB = [
  {
    title: "Music player",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis eveniet, incidunt ad animi minus, doloribus velit quae aliquid !",
    briefing: "lorem ipsum dolor sit amet consectetur",
    type: "Web-site",
    techs: ["React"],
    link: "http://minorfy.herokuapp.com/",
    repo: "https://github.com/fletech/minorfy-musicplayer",
    image: Minorfy,
  },
  {
    title: "TreintaONce",
    description: "Digital stained glass.",
    briefing: "A site to show up past productions.",
    type: "Web-site",
    techs: ["React", "framer-motion", "React-query", "Vite.js"],
    link: "https://treintaonce.vercel.app/",
    repo: "https://github.com/fletech/treintaonce",
    image: Treintaonce,
    building: true,
  },
  {
    title: "Caniada e-commerce",
    description:
      "Currently out of order due to Heroku policies from October 2022. Yet you might check the repo.",
    briefing: "lorem ipsum dolor sit amet consectetur",
    type: "Web-site",
    techs: ["Express", "MySQL", "MVC"],
    link: "http://grupo6-caniada.herokuapp.com/",
    repo: "https://github.com/NelsonLoto/grupo_6_caniadaDesigns",
    image: Caniada,
  },

  {
    title: "SuperHero Challange",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis eveniet, incidunt ad animi minus, doloribus velit quae aliquid !",
    briefing: "lorem ipsum dolor sit amet consectetur",
    type: "Web-site",
    techs: ["React", "styled-components"],
    link: "http://alkemy-react-challenge.vercel.app/",
    repo: "https://github.com/fletech/alkemy-react-challenge",
    image: SuperHero,
    building: true,
  },
  {
    title: "Photo Portfolio",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis eveniet, incidunt ad animi minus, doloribus velit quae aliquid !",
    briefing: "lorem ipsum dolor sit amet consectetur",
    type: "Web-site",
    techs: ["React", "Framer-motion"],
    link: "http://fotocom.herokuapp.com/",
    repo: "https://github.com/fletech/combina-foto",
    image: Combina,
    building: true,
  },
];
