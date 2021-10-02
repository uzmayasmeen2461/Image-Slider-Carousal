const img = document.querySelectorAll("#image-container img");
const imgContainer = document.getElementById("image-container");
const prevbtn = document.getElementById("prevbtn");
const nextbtn = document.getElementById("nextbtn");

let idx = 0;
let interval = setInterval(run, 2000);

function run() {
  idx++;
  changeImage();
}

function changeImage() {
  if (idx > img.length - 1) {
    idx = 0;
  } else if (idx < 0) {
    idx = img.length - 1;
  }

  imgContainer.style.transform = `translate(${-idx * 550}px)`;
}

function resetInterval() {
  clearInterval(interval);
  interval = setInterval(run, 2000);
}

nextbtn.addEventListener("click", () => {
  idx++;
  changeImage();
  resetInterval();
});

prevbtn.addEventListener("click", () => {
  idx--;
  changeImage();
  resetInterval();
});
