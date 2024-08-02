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

function openGameEV1(tabName) {
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

let tg = window.Telegram.Webapp;

tg.expand();

tg.Mainbutton.textColor = '#FFFFF';
tg.Mainbutton.color = '#2cab37';

let.item = "";

let btn1 = document.getElementById("clicker");

btn1.addEventListener("click", function(){
    if (tg.Mainbutton.isVisible) {
        tg.Mainbutton.hide();
    }
    else {
        tg.Mainbutton.setText("Hello");
        item = "1";
        tg.Mainbutton.Show();
    }
});

Telegram.Webapp.onEvent("mainButtonClicked", function(){
    tg.sendData(item);
});
