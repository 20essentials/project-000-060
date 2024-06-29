const d = document,
  w = window;

console.log("Background Reference ->", "https://wallhaven.cc/w/yxo3yd");

let createRaindrops = (amount) => {
  let i = 0;

  while (i < amount) {
    let container = d.createElement("article"),
      raindrop = d.createElement("div"),
      duration = Math.random() * 4 + 1 + "s",
      delay = Math.random() * -20 + "s",
      scale = Math.random() * 0.1 + 0.5,
      posX = Math.random() * w.innerWidth + "px";

    container.style.left = posX;
    container.style.animationDuration = duration;
    container.style.animationDelay = delay;
    raindrop.style.scale = scale;

    container.appendChild(raindrop);
    d.body.appendChild(container);

    i++;
  }
};

createRaindrops(222);
