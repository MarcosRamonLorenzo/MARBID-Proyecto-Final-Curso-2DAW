"use strict";

const getImagenRandom = () => {
  const arrayImgs = [
    `src/assets/FotosLogin/bosque_HD.jpg`,
    `src/assets/FotosLogin/pintura.jpg`,
    `src/assets/FotosLogin/saturno_tierra.jpg`,
    `src/assets/FotosLogin/tierra_2.jpg`,
    `src/assets/FotosLogin/Tierra_HD.jpg`,
  ];

  return arrayImgs[Math.floor(Math.random() * 4) + 1];
};

export { getImagenRandom };
