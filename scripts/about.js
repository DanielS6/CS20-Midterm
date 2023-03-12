var pets = ["dog", "cat"];

window.onload = function() 
{
    firstFunc();
}

function firstFunc() 
{
    var imgNum = 2;
    for (i = 0; i < 6; i++) {
        const randomIndex = Math.floor(Math.random() * pets.length)
        var pet = pets[randomIndex]
        document.getElementById("box" + i).style.backgroundImage = "url('./images/" + pet + imgNum + ".jpg')"
        document.getElementById("box" + i).style.setProperty("background-position", "50% 40%");
        document.getElementById("box" + i).style.setProperty("background-repeat", "no-repeat")
        document.getElementById("box" + i).style.setProperty("background-size", "cover")
        imgNum++
    }
};

function fadeBackground(box) 
{
    console.log(box)
    document.getElementById(box).style.backgroundImage = "url('./images/orange.jpg')"
    console.log(document.getElementById(box))
}

function mouseoff(box)
{
    const index = Math.floor(Math.random() * pets.length)
    const petNum = Math.floor(Math.random() * 6) + 2
    var pet = pets[index];
    document.getElementById(box).style.backgroundImage = "url('./images/" + pet + petNum + ".jpg')"
}
