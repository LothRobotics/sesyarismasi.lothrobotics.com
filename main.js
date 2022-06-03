baharpoint = 1
nehirpoint = 2
azrapoint = 3
supoint = 4
points = {
    "bahar": 0,
    "nehir": 0,
    "azra": 0,
    "su": 0
}

var projectorwindow = window.open("projection.html", "Sabancıart Ses Yarışması", "width=500,height=700");

window.onbeforeunload = function(){
    projectorwindow.close()
}

function updatePoints(name) {
    if (document.getElementById(name + 'pointinput').value == "") {
        return
    }
    points[name] += parseInt(document.getElementById(name + 'pointinput').value)
    document.getElementById(name + 'pointinput').value = ""
    document.getElementById(name + 'points').innerHTML = points[name]
    updateScoreboard()
}

function updateHeaders() {
    projectorwindow.document.getElementById("bottomlefttext").innerHTML = document.getElementById("bottomleftinput").value
    projectorwindow.document.getElementById("topmiddletext").innerHTML = document.getElementById("topmiddleinput").value
    projectorwindow.document.getElementById("toplefttext").innerHTML = document.getElementById("topleftinput").value
}

function updateScoreboard() {
    /*
    toppoint = 0
    toppointname = ""
    toTry = ["bahar", "nehir", "azra", "su"]
    while (toTry.length) {
        toTry.forEach(person => {
            if (points[person] > toppoint) {
                toppoint = points[person]
                toppointname = person
            }
        });
        console.log(toppointname + " is top")
        toTry.splice(toTry.indexOf(toppointname), 1)
        console.log(toTry)
    }
    */
    projectorwindow.document.getElementById("baharpoints").innerHTML = points["bahar"]
    projectorwindow.document.getElementById("nehirpoints").innerHTML = points["nehir"]
    projectorwindow.document.getElementById("azrapoints").innerHTML = points["azra"]
    projectorwindow.document.getElementById("supoints").innerHTML = points["su"]
}

function createPerson(name) {
    return '<div class="person"' + name + '</p><p>' + name + '</p></div>'
}

function showLogo() {
    projectorwindow.document.getElementById("logo").style.display = "flex"
    projectorwindow.document.getElementById("voting").style.display = "none"
    projectorwindow.document.getElementById("singer").style.display = "none"
    projectorwindow.document.getElementById("dilara").style.display = "none"
    projectorwindow.document.getElementById("body").style.backgroundColor = "#04162F"
}

function showVoting() {
    projectorwindow.document.getElementById("logo").style.display = "none"
    projectorwindow.document.getElementById("voting").style.display = "flex"
    projectorwindow.document.getElementById("singer").style.display = "none"
    projectorwindow.document.getElementById("dilara").style.display = "none"
    projectorwindow.document.getElementById("body").style.backgroundColor = "#04162F"
}

function showName() {
    projectorwindow.document.getElementById("logo").style.display = "none"
    projectorwindow.document.getElementById("voting").style.display = "none"
    projectorwindow.document.getElementById("singer").style.display = "flex"
    projectorwindow.document.getElementById("dilara").style.display = "none"
    projectorwindow.document.getElementById("body").style.backgroundColor = "#04162F"
}

function showDilara() {
    projectorwindow.document.getElementById("logo").style.display = "none"
    projectorwindow.document.getElementById("voting").style.display = "none"
    projectorwindow.document.getElementById("singer").style.display = "none"
    projectorwindow.document.getElementById("dilara").style.display = "flex"
    projectorwindow.document.getElementById("body").style.backgroundColor = "black"
}

function updateSingerName() {
    projectorwindow.document.getElementById("singername").innerHTML = document.getElementById("singernameinput").value
}