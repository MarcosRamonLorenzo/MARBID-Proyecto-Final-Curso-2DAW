"use strict";

const getImagenRandom = () => {
  const arrayImgs = [
    `src/assets/FotosLogin/bosque_HD.jpg`,
    `src/assets/FotosLogin/saturno_tierra.jpg`,
    `src/assets/FotosLogin/puente.jpg`,
    `src/assets/FotosLogin/nebula.png`,
  ];

  const randomIndex = Math.floor(Math.random() * arrayImgs.length);

  return arrayImgs[randomIndex];
};

export { getImagenRandom };
