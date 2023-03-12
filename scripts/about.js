var pets = ["dog", "cat"];

window.onload = function() {
    console.log("inside calling func")
    firstFunc();
}


function firstFunc() {
    document.getElementById("box0").backgroundColor = "#f3f3f3"
    var imgNum = 2;
    for (i = 0; i < 6; i++) {
        const randomIndex = Math.floor(Math.random() * pets.length);
        var pet = pets[randomIndex];
        document.getElementById("box" + i).style.backgroundImage = "url('./images/" + pet + imgNum + ".jpg')"
        document.getElementById("box" + i).style.setProperty("background-position", "50% 40%");
        document.getElementById("box" + i).style.setProperty("background-repeat", "no-repeat")
        document.getElementById("box" + i).style.setProperty("background-size", "cover")
        imgNum++
    }

};


