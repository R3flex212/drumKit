var drumBtnArray = document.querySelectorAll(".drum");

drumBtnArray.forEach((element) => {
  element.addEventListener("click", () => {
    var name = element.textContent;
    var audio = new Audio(`sounds/${name}.mp3`);
    audio.play();
    btnAnimation(`${name}`);
  });
});

document.addEventListener("keydown", (event) => {
  switch (event.key) {
    case "w":
      var audio = new Audio(`sounds/${event.key}.mp3`);
      audio.play();
      btnAnimation(`${event.key}`);
      break;
    case "a":
      var audio = new Audio(`sounds/${event.key}.mp3`);
      audio.play();
      btnAnimation(`${event.key}`);
      break;
    case "s":
      var audio = new Audio(`sounds/${event.key}.mp3`);
      audio.play();
      btnAnimation(`${event.key}`);
      break;
    case "d":
      var audio = new Audio(`sounds/${event.key}.mp3`);
      audio.play();
      btnAnimation(`${event.key}`);
      break;
    case "j":
      var audio = new Audio(`sounds/${event.key}.mp3`);
      audio.play();
      btnAnimation(`${event.key}`);
      break;
    case "k":
      var audio = new Audio(`sounds/${event.key}.mp3`);
      audio.play();
      btnAnimation(`${event.key}`);
      break;
    case "l":
      var audio = new Audio(`sounds/${event.key}.mp3`);
      audio.play();
      btnAnimation(`${event.key}`);
      break;
  }
});

function btnAnimation(btn) {
    document.querySelector(`.${btn}`).classList.add("pressed");
    setTimeout(() => {
        document.querySelector(`.${btn}`).classList.remove("pressed");
    }, 100);
}
