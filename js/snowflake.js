const body = document.querySelector("body");
const MIN_ANIMATION_DURATION = 10;
const MIN_SIZE = 5;
const SNOWFLAKE_WIDTH = 8;
const MAX_SNOWFLAKE_LEFT = window.screen.width - 2 * SNOWFLAKE_WIDTH;

function makeSnowflake() {
  const snowflake = document.createElement("div");
  const delay = Math.random() * 10;
  const initialOpacity = Math.random();
  const duration = Math.random() * 20 + MIN_ANIMATION_DURATION;
  const size = Math.random() * 10 + MIN_SIZE;

  snowflake.classList.add("snowflake");
  snowflake.style.left = `${Math.min(Math.random() * window.screen.width, MAX_SNOWFLAKE_LEFT)}px`;
  snowflake.style.width = `${size}px`;
  snowflake.style.height = `${size}px`;
  snowflake.style.animationDelay = `${delay}s`;
  snowflake.style.opacity = initialOpacity;
  snowflake.style.animation = `fall ${duration}s linear`;

  body.appendChild(snowflake);

  setTimeout(() => {
    body.removeChild(snowflake);
    makeSnowflake();
  }, (duration + delay) * 1000);
}

for (let index = 0; index < 100; index++) {
  setTimeout(makeSnowflake, 500 * index);
}
