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
    document.getElementsByClassName("unfollowButton_1fDUg")[1].disabled = true;
    document.getElementsByClassName("unfollowButton_1fDUg")[2].style.display = "none";
    document.getElementsByTagName("header")[0].style.display = "block";
    document.getElementsByTagName("aside")[0].style.display = "block";
    document.getElementById("content").style.display = "block";

    //     var x = document.querySelectorAll(".out23");
    //     for (var i = 0; i < x.length; i++) {
    //         x[i].remove();
    //     }

}
function gen1() {
    var x2 = document.createElement("button");
    var t2 = document.createTextNode("Exit");
    x2.setAttribute("onclick", "exit1()");
    x2.setAttribute("class", "unfollowButton_1fDUg");
    x2.setAttribute("style", "background:green!important;");
    x2.appendChild(t2);
    document.body.insertBefore(x2, document.body.childNodes[2]);

    document.getElementsByClassName("unfollowButton_1fDUg")[1].disabled = false;
    document.getElementsByTagName("header")[0].style.display = "none";
    document.getElementsByTagName("aside")[0].style.display = "none";
    document.getElementById("content").style.display = "none";
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
            x.setAttribute("width", "100%");
            document.body.appendChild(x);
        }
    }
    om();
}
