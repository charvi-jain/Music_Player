const music =document.querySelector("audio");
const img=document.querySelector("img");
const play=document.getElementById("play");
const text1=document.getElementById("text1");
const text2=document.getElementById("text2");
const forw=document.getElementById("forw");
const prev=document.getElementById("prev");
const bgimg=document.querySelector(".bg-image");
let progress=document.getElementById("prog");
let total_duration=document.getElementById("duration");
let current_time=document.getElementById("current_time");
const progress_divs=document.getElementById("progress_divs");
const songs=[
  {
  name:"c-1",

  text1:"GoodBye  Stress",
  text2:"ZakharValaha",

},

{
  name:"c-2",
  text1:"Chilled   Forest",
  text2:"Lesfm",
},
{
  name:"c-3",
  text1:"Melody   of   Nature",
  text2:"GoodbMusic",
},
];
let isPlaying=false;

const playMusic= function(){
  isPlaying=true;
  music.play();
  play.classList.replace("fa-play-circle","fa-pause-circle" );
  img.classList.add("anime");
};

const pauseMusic= function(){
  isPlaying=false;
  music.pause();
  play.classList.replace("fa-pause-circle","fa-play-circle" );
  img.classList.remove("anime");
};

play.addEventListener("click",function(){
  if(isPlaying){
    pauseMusic();
  }else{
    playMusic();
  }
});
const loadSong= function(songs){
  text1.textContent=songs.text1;
  text2.textContent=songs.text2;
  music.src="music/"+songs.name+".mp3";
  img.src="images/"+songs.name+".jpg";
  // bgimg.src="url(bg/"+songs.name+".jpg)";
  bgimg.style.backgroundImage =
     "url(bg/" + songs.name + ".jpg)";
}
 songIndex=0;

const forwSong=function(){
  songIndex=(songIndex+1)%songs.length;
  loadSong(songs[songIndex]);
  playMusic();
};

const prevSong=function(){
  songIndex=(songIndex-1+songs.length)%songs.length;
  loadSong(songs[songIndex]);
  playMusic();
};

//progress div work

music.addEventListener('timeupdate',function(event){
  const{currentTime, duration}=event.srcElement;

  let progress_time=(currentTime/duration)*100;
  progress.style.width=`${progress_time}% `;

  // music duration number update
  let min_duration=Math.floor(duration/60);
  let sec_duration=Math.floor(duration%60);
  if(sec_duration<10){
    sec_duration=`0${sec_duration}`;
  }

let tot_duration =`${min_duration}:${sec_duration}`;
if(duration){
  total_duration.textContent=`${tot_duration}`;
}


let min_currentTime=Math.floor(currentTime/60);
let sec_currentTime=Math.floor(currentTime%60);
if(sec_currentTime<10){
  sec_currentTime=`0${sec_currentTime}`;

}
// if(currentTime<10 && f==1){
//   sec_currentTime=`${sec_currentTime}0`;
// }
let tot_currentTime =`${min_currentTime}:${sec_currentTime}`;
if(currentTime){
current_time.textContent=`${tot_currentTime}`;
}

});

// click function

// progress_divs.addEventListener("click",function(){
//   const{ duration}=music;
//
//   let move_progress=(event.offsetX/event.srcElement.clientWidth)*duration;
//   music.currentTime=move_progress;
// });

music.addEventListener("ended",forwSong);



forw.addEventListener("click",forwSong);
prev.addEventListener("click",prevSong);
