export function SliderEvent() {
  const prev = document.getElementById("prev-slider");
  const next = document.getElementById("next-slider");
  const slider = document.querySelector(".also-add");

  let count = 0;

  prev.addEventListener("click", () => {
    count = Math.max(count - 1, 0);
    handleSlider(count, slider);
  });

  next.addEventListener("click", () => {
    count = Math.min(count + 1, slider.children.length - 1);
    handleSlider(count, slider);
  });
}

function handleSlider(count, slider) {
  slider.style.transform = `translateX(-${
    slider.children[0].offsetWidth * count
  }px)`;
}
