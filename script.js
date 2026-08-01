window.onload = function () {

    alert("script.js loaded");

    db.collection("website").doc("stats").get()
    .then(function(doc){

        alert("Reached Firestore");

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
document.getElementById("announcement").innerHTML =
"📢 " + doc.data().announcement;

document.getElementById("newsTitle").innerHTML =
doc.data().newsTitle;

document.getElementById("newsDate").innerHTML =
"📅 " + doc.data().newsDate;

document.getElementById("gallery1").src =
doc.data().gallery1;
        } else {

            alert("Document not found");

        }

    })
    .catch(function(error){

        alert(error.message);

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
❤️ <span>${data.likes || 0}</span>
</button>

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