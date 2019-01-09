var ik = 0;
var jkl = document.querySelectorAll(".collectionLessonListItem_2MCIr a").length;
setInterval(function() {
    var nm1444 = document.getElementById("nextLinkMobile");
    klo();
    ik++;
    nm1444.click();
    gen1();
}, 10000);
function klo() {
    if (ik == (jkl - 1)) {
        var x2 = document.createElement("button");
        var t2 = document.createTextNode("Print");
        x2.setAttribute("onclick", "window.print()");
        x2.setAttribute("class", "unfollowButton_1fDUg");
        x2.setAttribute("style", "background:green!important;margin-left: 40%;");
        x2.appendChild(t2);
        document.body.insertBefore(x2, document.body.childNodes[0]);

        var x1 = document.createElement("button");
        var t1 = document.createTextNode("Exit");
        x1.setAttribute("onclick", "exit1()");
        x1.setAttribute("class", "unfollowButton_1fDUg");
        x1.setAttribute("style", "background:blue!important;");
        x1.appendChild(t1);
        document.body.insertBefore(x1, document.body.childNodes[1]);

        document.getElementsByTagName("header")[0].style.display = "none";
        document.getElementsByTagName("aside")[0].style.display = "none";
        document.getElementById("content").style.display = "none";

    }
}
function gen1() {
    var uij = document.getElementsByTagName("iframe")[0].src;
    var bh = uij.search("&");
    var bh1 = uij.search("=");
    var vn1 = uij.slice(bh1 + 1, bh);
    function om() {
        for (var i = 0; i < 41; i++) {
            var url1 = "https://player.uacdn.net/lesson-raw/" + vn1 + "/images/webp/w768/" + i + ".webp";
            var x = document.createElement("IMG");
            x.setAttribute("class", "out23");
            x.setAttribute("src", url1);
            x.setAttribute("onerror", "this.style.display='none'");
            x.setAttribute("width", "100%");
            document.body.appendChild(x);
        }
    }
    om();
}
function exit1() {
    document.getElementsByTagName("header")[0].style.display = "block";
    document.getElementsByTagName("aside")[0].style.display = "block";
    document.getElementById("content").style.display = "block";
    document.getElementsByClassName("unfollowButton_1fDUg")[0].style.display = "none";
    document.getElementsByClassName("unfollowButton_1fDUg")[1].style.display = "none";
    var x = document.querySelectorAll(".out23");
    for (var i = 0; i < x.length; i++) {
        //         x[i].style.display = "none";
        x[i].remove();
    }
}
