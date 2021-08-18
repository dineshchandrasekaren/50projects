let progress = document.getElementById("progress");
let btnPrev = document.getElementById("btn-prev");
let btnNext = document.getElementById("btn-next");
let circles = document.querySelectorAll(".circle");
btnPrev.disabled = true;

let count = 0;
let width = 0;
btnNext.addEventListener('click', () => {
    count += 1;
    width += 33.33;
    console.log(count);
    circles[count].classList.add("active");
    progress.style.width = `${width}%`;
    if (count ==3) {
        btnNext.disabled = true;
    }
    if (count > 0) {
        btnPrev.disabled = false;
    }
});
btnPrev.addEventListener('click', () => {
    count -= 1;
      width -= 33.33;
    console.log(count);
    circles[count + 1].classList.remove("active");
    progress.style.width = `${width}%`;
    if (count== 0) {
        btnPrev.disabled = true;
    }
    if (count <= 3) {
        btnNext.disabled = false;
    }
});
