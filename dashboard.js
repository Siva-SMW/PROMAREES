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
        alert("✅ Saved!");
    })
    .catch(function (error) {
        alert("❌ " + error.message);
    });
}