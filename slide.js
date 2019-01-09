var x = document.createElement("button");
var t = document.createTextNode("Gen-1st");
x.setAttribute("onclick", "gen1()");
x.setAttribute("class", "unfollowButton_1fDUg");
x.setAttribute("style", "background:red!important;margin-left: 40%;");
x.appendChild(t);
document.body.insertBefore(x, document.body.childNodes[0]);
var x1 = document.createElement("button");
var t1 = document.createTextNode("Print-2nd");
x1.setAttribute("onclick", "window.print()");
x1.setAttribute("class", "unfollowButton_1fDUg");
x1.setAttribute("style", "background:blue!important;");
x1.appendChild(t1);
document.body.insertBefore(x1, document.body.childNodes[1]);
document.getElementsByClassName("unfollowButton_1fDUg")[1].disabled = true;

function exit1() {
    document.getElementsByTagName("body")[0].style.padding = "78px 0px 0px";
    document.getElementsByClassName("unfollowButton_1fDUg")[1].disabled = true;
    document.getElementsByClassName("unfollowButton_1fDUg")[2].style.display = "none";
    document.getElementsByClassName("wrapper")[0].style.display = "block";
    document.getElementsByClassName("modal_popup_container")[0].style.display = "block";
    document.getElementById("main-nav").style.display = "block";
    var x = document.querySelectorAll(".out23");
    for (var i = 0; i < x.length; i++) {
        x[i].remove();
    }
}
//wrapper modal_popup_container modal-login-wrapper main-nav
function gen1() {
    document.getElementsByTagName("body")[0].style.padding = "0px";
    document.getElementsByClassName("tooltip")[0].style.display = "none";
    document.getElementsByClassName("wrapper")[0].style.display = "none";
    document.getElementsByClassName("modal_popup_container")[0].style.display = "none";
    document.getElementById("main-nav").style.display = "none";
    var x2 = document.createElement("button");
    var t2 = document.createTextNode("Exit");
    x2.setAttribute("onclick", "exit1()");
    x2.setAttribute("class", "unfollowButton_1fDUg");
    x2.setAttribute("style", "background:green!important;");
    x2.appendChild(t2);
    document.body.insertBefore(x2, document.body.childNodes[2]);

    document.getElementsByClassName("unfollowButton_1fDUg")[1].disabled = false;

    var yt = document.getElementsByClassName("slide_image");
    for (var i = 1; i <= yt.length; i++) {
        var strf = yt[0].src;
        var bh = strf.replace("-1-638", "-" + i + "-1024");
        var x = document.createElement("IMG");
        x.setAttribute("class", "out23");
        x.setAttribute("src", bh);
        x.setAttribute("width", "100%");
        document.body.appendChild(x);
        // console.log(bh);
    }
    document.getElementsByClassName("modal-login-wrapper")[0].style.display = "none";
}
