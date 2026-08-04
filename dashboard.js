alert("dashboard.js loaded");

function saveData() {
    alert("saveData started");

alert(document.getElementById("newsTitle"));
alert(document.getElementById("newsDate"));

const data = {
    followers: Number(document.getElementById("followers").value),
    indiaRank: Number(document.getElementById("india").value),
    worldRank: Number(document.getElementById("world").value),
    level: Number(document.getElementById("level").value),
    matches: Number(document.getElementById("matches").value),
    wins: Number(document.getElementById("wins").value),
    announcement: document.getElementById("announcement").value,
    newsTitle: document.getElementById("newsTitle").value,
    newsDate: document.getElementById("newsDate").value,
    gallery1: document.getElementById("gallery1").value,
};

alert("Data object created");
    alert("Data collected");

    db.collection("website").doc("stats").set(data, { merge: true })
    .then(function () {
const toast = document.getElementById("toast");

toast.classList.add("show");

setTimeout(function(){
    toast.classList.remove("show");
},2000);
    })
    .catch(function (error) {
        alert("❌ " + error.message);
    });
}
db.collection("website").doc("stats").get()
.then(function(doc){

    if(doc.exists){

        document.getElementById("followers").value = doc.data().followers || 0;
        document.getElementById("india").value = doc.data().indiaRank || 0;
        document.getElementById("world").value = doc.data().worldRank || 0;
        document.getElementById("level").value = doc.data().level || 0;
        document.getElementById("matches").value = doc.data().matches || 0;
        document.getElementById("wins").value = doc.data().wins || 0;

        document.getElementById("announcement").value =
            doc.data().announcement || "";

        document.getElementById("newsTitle").value =
            doc.data().newsTitle || "";

        document.getElementById("newsDate").value =
            doc.data().newsDate || "";

        document.getElementById("gallery1").value =
            doc.data().gallery1 || "";

    }

});