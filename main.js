const image = document.querySelector(".image");
const music = document.querySelector("audio");
const audioDiv = document.querySelector(".audio");
const btn = document.querySelector("#second-btn");
const songName = document.querySelector('.song-name')
// const btns = document.querySelectorAll('.btn')

const iplay = "fa-solid fa-play";
const ipause = "fa-solid fa-pause ";

const array = [
  { id: 1, song: "/music/maski.mp3", img: "./img/Logo.png", name: 'MASKI MASKI' , time:5},
  { id: 2, song: "/music/rato-chandra.mp3", img: "./img/nepal.png", name: 'RATO CHANDRA SURYA',time:84 },
  { id: 3, song: "/music/mero-priya.mp3", img: "./img/mero-priya.png", name: 'MERO PRIYA',time:84 },
  { id: 4, song: "/music/maya.mp3", img: "./img/maya.png", name: 'MAYA', time:84 },
  { id: 5, song: "/music/small.mp3", img: "./img/nepal.png", name: 'SMALL', time:84 },
];

let counter = 2

image.innerHTML = ` <img src="${array.find((x) => x.id===counter).img}" alt="loading">`;
music.setAttribute("src", `${array.find((x) => x.id===counter).song}`);
songName.innerHTML = array.find((x)=> x.id===counter).name;

async function play() {
  if (image.classList.contains("active")) {
    image.classList.remove("active");
    btn.innerHTML = `<i class="${iplay}" style="font-size: 1.5rem"></i>`;
    music.pause();
    image.style.animationPlayState = "paused";
  } else {
    image.classList.add("active");
    btn.innerHTML = `<i class="${ipause}" style="font-size: 1.5rem"></i>`;
    music.play();
    image.style.animationPlayState = "running";
  }
}


// function forWard() {
//   music.currentTime += 10;
// }
// function backWard() {
//   music.currentTime -= 10;
// }

Next = ()=>{
  if(counter <= array.length-1){
    counter++
  }
  music.setAttribute("src", `${array.find((x) => x.id===counter).song}`);
  image.innerHTML = ` <img src="${array.find((x) => x.id===counter).img}" alt="loading">`;
  songName.innerHTML = array.find((x)=> x.id===counter).name;
  if (image.classList.contains("active")){
    music.play();
  }
  else{
    music.pause();
  }

}
Previous = ()=>{
  if(counter >=0){
    counter--
  }
  music.setAttribute("src", `${array.find((x) => x.id===counter).song}`);
  image.innerHTML = ` <img src="${array.find((x) => x.id=== counter).img}" alt="loading">`;
  songName.innerHTML = array.find((x)=> x.id=== counter).name;
  if (image.classList.contains("active")){
    music.play();
  }
  else{
    music.pause();
  }

}

