let tg = window.Telegram.WebApp;

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
    var iframe = document.getElementById("header-iframe");
    var headlinks = document.getElementsByClassName("header-button");

    // Проверяем, открыт ли уже этот заголовок
    if (iframe.src.includes(headName)) {
        // Если открыт, закрываем его
        iframe.src = "";
        for (var i = 0; i < headlinks.length; i++) {
            headlinks[i].classList.remove("active");
        }
    } else {
        // Если не открыт, открываем его
        iframe.src = headName;
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
}