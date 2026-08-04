window.onload = function () {


    db.collection("website").doc("stats").get()
    .then(function(doc){


        if(doc.exists){
          document.getElementById("likes").innerHTML =
doc.data().likes;

            document.getElementById("followers").innerHTML =
            doc.data().followers.toLocaleString();
            
document.getElementById("indiaRank").innerHTML =
doc.data().indiaRank;

document.getElementById("worldRank").innerHTML =
doc.data().worldRank;

document.getElementById("level").innerHTML =
doc.data().level;

document.getElementById("matches").innerHTML =
doc.data().matches.toLocaleString();

document.getElementById("wins").innerHTML =
(doc.data().wins || 0).toLocaleString();
document.getElementById("announcement").innerHTML =
"📢 " + doc.data().announcement;

document.getElementById("newsTitle").innerHTML =
doc.data().newsTitle;

document.getElementById("newsDate").innerHTML =
"📅 " + doc.data().newsDate;

document.getElementById("gallery1").src =
doc.data().gallery1;
        } else {


        }

    })
    .catch(function(error){


    });

};
function addLike() {

    db.collection("website").doc("stats").update({
        likes: firebase.firestore.FieldValue.increment(1)
    })
    .then(function () {

        db.collection("website").doc("stats").get()
        .then(function(doc) {
            document.getElementById("likes").innerHTML =
            doc.data().likes;
        });

    })
    .catch(function(error) {
        alert(error.message);
    });

}
db.collection("comments").get()
.then(function(snapshot){

    let html = "";

    snapshot.forEach(function(doc){

        let data = doc.data();

        html += `
<div class="comment-card">
    <h3>👤 ${data.name}</h3>
    <p>${data.message}</p>

<button class="comment-like-btn"
onclick="likeComment('${doc.id}')">
❤️ ${data.likes || 0}
</button>

<button class="reply-btn"
onclick="replyComment('${doc.id}')">
💬 Reply
</button>

<div id="replyBox-${doc.id}"></div>

</div>
`;

    });

    document.getElementById("commentsList").innerHTML = html;

})
.catch(function(error){
    console.log(error);
});
function likeComment(id){

    db.collection("comments").doc(id).update({
        likes: firebase.firestore.FieldValue.increment(1)
    }).then(function(){

        db.collection("comments").doc(id).get()
.then(function(doc){

    let button = event.target;

    if(button.tagName != "BUTTON"){
        button = button.parentElement;
    }

    button.innerHTML = "❤️ " + doc.data().likes;

});

    });

}
function updateClock() {

    const clock = document.getElementById("clock");

    if (!clock) return;

    const now = new Date();

    clock.innerHTML = now.toLocaleTimeString("en-IN", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
    });
}

window.addEventListener("load", function () {

    updateClock();

    setInterval(updateClock, 1000);

    randomVisitors();

    setInterval(randomVisitors, 5000);
    
    function randomVisitors(){

    let number = Math.floor(Math.random()*900000)+100000;

    document.getElementById("counter").innerHTML = number.toLocaleString();

}

});
function replyComment(id){

    alert("🚧 Reply system is coming soon!");

}
window.addEventListener("load", function(){

    let progress = 0;

    const fill = document.getElementById("loader-fill");
    const text = document.getElementById("loadingText");
    const loader = document.getElementById("loader");

    if(!fill || !text || !loader) return;

    const loading = setInterval(function(){

        progress++;

        fill.style.width = progress + "%";

        if(progress < 15){
            text.innerHTML = "🚀 Initializing PROMAREES...";
        }
        else if(progress < 35){
            text.innerHTML = "🔥 Connecting to Firebase...";
        }
        else if(progress < 55){
            text.innerHTML = "🎮 Loading Game Stats...";
        }
        else if(progress < 75){
            text.innerHTML = "🖼️ Loading Gallery...";
        }
        else if(progress < 90){
            text.innerHTML = "💬 Loading Comments...";
        }
        else{
            text.innerHTML = "🏆 Almost Ready...";
        }

        if(progress >= 100){

            clearInterval(loading);

            text.innerHTML = "✅ Welcome to PROMAREES!";
            const lightning = document.getElementById("lightning");

if(lightning){

    lightning.classList.add("flash");

    setTimeout(function(){

        lightning.classList.remove("flash");

    },250);

}
            const particles = document.getElementById("particles");

for(let i=0;i<40;i++){

    const spark = document.createElement("div");

    spark.className = "spark";

    spark.style.left = "50%";
    spark.style.top = "50%";

    spark.style.setProperty("--x",
        (Math.random()*600-300)+"px");

    spark.style.setProperty("--y",
        (Math.random()*600-300)+"px");

    particles.appendChild(spark);

    setTimeout(function(){

        spark.remove();

    },1000);

}

            setTimeout(function(){

                loader.style.transition = "opacity 0.8s";
                loader.style.opacity = "0";

                setTimeout(function(){
                    loader.style.display = "none";
                },800);

            },1000);

        }

    },20);

});