alert("dashboard.js loaded");

function saveData() {
    alert("saveData started");

    const data = {
        followers: Number(document.getElementById("followers").value),
        indiaRank: Number(document.getElementById("india").value),
        worldRank: Number(document.getElementById("world").value),
        level: Number(document.getElementById("level").value),
        matches: Number(document.getElementById("matches").value),
        wins: Number(document.getElementById("wins").value)
    };

    alert("Data collected");

    db.collection("website").doc("stats").set(data)
    .then(function () {
        alert("✅ Saved!");
    })
    .catch(function (error) {
        alert("❌ " + error.message);
    });
}