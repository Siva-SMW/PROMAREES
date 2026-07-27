alert("script.js loaded");

  function unlockAchievement(name){

let popup=document.getElementById("achievementPopup");

popup.innerHTML="🏆 Achievement Unlocked!<br>"+name;

popup.style.display="block";

setTimeout(function(){
popup.style.display="none";
},2500);

}
  function fireworks(){

for(let i=0;i<30;i++){

let dot=document.createElement("div");

dot.style.position="fixed";
dot.style.width="8px";
dot.style.height="8px";
dot.style.borderRadius="50%";
dot.style.background=
`hsl(${Math.random()*360},100%,60%)`;

dot.style.left="50%";
dot.style.top="50%";

document.body.appendChild(dot);

let x=(Math.random()-0.5)*500;
let y=(Math.random()-0.5)*500;

dot.animate([
{transform:"translate(0,0)",opacity:1},
{transform:`translate(${x}px,${y}px)`,opacity:0}
],{
duration:1200
});

setTimeout(()=>dot.remove(),1200);

}

}
  function animateCounter(id,end){
let current=0;

let timer=setInterval(function(){

current+=Math.ceil(end/100);

if(current>=end){
current=end;
clearInterval(timer);
}

document.getElementById(id).innerHTML=current.toLocaleString();

},20);
}

window.onscroll = function(){
    let btn = document.getElementById("topBtn");

    if(document.body.scrollTop > 200 || document.documentElement.scrollTop > 200){
        btn.style.display = "block";
    }else{
        btn.style.display = "none";
    }
};

function topFunction(){
    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
}
  function updateClock(){
    const now = new Date();
    document.getElementById("clock").innerHTML =
        now.toLocaleTimeString();
}

setInterval(updateClock,1000);
updateClock();
let count = Math.floor(Math.random() * 5000) + 10000;

document.getElementById("counter").innerHTML =
count.toLocaleString();

setInterval(function(){

    count += Math.floor(Math.random() * 5);

    document.getElementById("counter").innerHTML =
    count.toLocaleString();

},3000);
function toggleTheme(){
    document.body.classList.toggle("light-mode");

    let btn = document.getElementById("themeBtn");

    if(document.body.classList.contains("light-mode")){
        btn.innerHTML="🌞 Light Mode";
    }else{
        btn.innerHTML="🌙 Dark Mode";
    }
}
function openImage(src){
    document.getElementById("fullImage").src = src;
    document.getElementById("imageViewer").style.display = "flex";
}

function closeImage(){
    document.getElementById("imageViewer").style.display = "none";
}
const db = firebase.firestore();

function saveData(){

const data = {
    followers: Number(document.getElementById("followers").value),
    indiaRank: Number(document.getElementById("india").value),
    worldRank: Number(document.getElementById("world").value),
    level: Number(document.getElementById("level").value),
    matches: Number(document.getElementById("matches").value),
    wins: Number(document.getElementById("wins").value)
};

db.collection("website").doc("stats").set(data)
.then(function(){
    alert("✅ Data Saved Successfully!");
})
.catch(function(error){
    alert("❌ " + error.message);
});

}
alert("Reading Firestore...");

db.collection("website").doc("stats").get()
.then(function(doc){

    alert("Document received");

    if(doc.exists){
        alert("Followers = " + doc.data().followers);

        document.getElementById("followers").innerHTML =
        doc.data().followers.toLocaleString();
    }else{
        alert("Document does not exist");
    }

})
.catch(function(error){
    alert("Firestore Error: " + error.message);
});