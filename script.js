window.onload = function () {

    alert("script.js loaded");

    db.collection("website").doc("stats").get()
    .then(function(doc){

        alert("Reached Firestore");

        if(doc.exists){

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
doc.data().wins.toLocaleString();
        } else {

            alert("Document not found");

        }

    })
    .catch(function(error){

        alert(error.message);

    });

};