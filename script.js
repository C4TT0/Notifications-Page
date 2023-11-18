const active = document.querySelectorAll(".active");
const markAsRead = document.querySelector(".mark__read");
const count = document.querySelector(".count");

active.forEach(e => {
  e.addEventListener("click", () => {
    if(e.classList.contains("active")){
        e.classList.remove("active");
        e.childNodes[3].childNodes[1].childNodes[5].remove();
        count.textContent = Number(count.textContent) - 1;
    }
  });
});

markAsRead.addEventListener("click", () => {
    active.forEach(e => {
        e.classList.remove("active");
        e.childNodes[3].childNodes[1].childNodes[5].remove();
    })
    count.textContent = 0;
})