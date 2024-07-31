function openTab(tabName) {
    document.getElementById("tab-iframe").src = tabName;
    var tablinks = document.getElementsByClassName("tab");
    for (var i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }
    var btns = document.getElementsByClassName("tab");
    for (var i = 0; i < btns.length; i++) {
        if (btns[i].getAttribute("onclick").includes(tabName)) {
            btns[i].classList.add("active");
        }
    }
}

function openHead(headName) {
    document.getElementById("header-iframe").src = headName;
    var headlinks = document.getElementsByClassName("header-button");
    for (var i = 0; i < headlinks.length; i++) {
        headlinks[i].classList.remove("active");
    }
    var btns1 = document.getElementsByClassName("header-button");
    for (var i = 0; i < btns1.length; i++) {
        if (btns1[i].getAttribute("onclick").includes(headName)) {
            btns1[i].classList.add("active");
        }
    }
}