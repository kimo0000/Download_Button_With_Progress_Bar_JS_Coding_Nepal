const button = document.querySelector("button");
let count = 0;
let interval = null;

button.addEventListener("click", () => {
  button.classList.add("hide");
  button.innerHTML = `<span class="bar"></span>`;

  const barEl = button.querySelector(".bar");

  interval = setInterval(() => {
    count++;
    barEl.style.width = `${count * 10}%`;

    if (count >= 11) {
      clearInterval(interval);
      button.classList.remove("hide");
      button.innerHTML = `<div class="icon">
                              <i class="fa-solid fa-check"></i>
                           </div>
                              <span>Completed</span>`;
    }
  }, 1000);
});
