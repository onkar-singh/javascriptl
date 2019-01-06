$(this).hide() - hides the current element.

$("p").hide() - hides all <p> elements.

$(".test").hide() - hides all elements with class="test".

$("#test").hide() - hides the element with id="test".


$(function(){

  // jQuery methods go here...

});


$(document).ready(function(){
  $("button").click(function(){
    $(".test").hide();
  });
});

//////////////Events/////////////////////

Mouse       	Keyboard 	Form 	Document/Window 
-----------------------------------------------------------
click	        keypress	submit	  load
dblclick    	keydown  	change	  resize
mouseenter   	keyup   	focus	  scroll
mouseleave	 	            blur      unload

//////////////////////selector/////////////

$("*")	Selects all elements
$(this)	Selects the current HTML element
$("p.intro")	Selects all <p> elements with class="intro"
$("p:first")	Selects the first <p> element	Try it
$("ul li:first")	Selects the first <li> element of the first <ul>
$("ul li:first-child")	Selects the first <li> element of every <ul>
$("[href]")	Selects all elements with an href attribute
$("a[target='_blank']")	Selects all <a> elements with a target attribute value equal to "_blank"
$("a[target!='_blank']")	Selects all <a> elements with a target attribute value NOT equal to "_blank"
$(":button")	Selects all <button> elements and <input> elements of type="button"	Try it
$("tr:even")	Selects all even <tr> elements
$("tr:odd")	Selects all odd <tr> elements


 $("p").hide();
 $("p").show();
 $("p").hide(1000);
 $("p").toggle();
  $("p").toggle(1000);

////////////fade/////////////////

$("button").click(function(){
  $("#div1").fadeIn();
  $("#div2").fadeIn("slow");
  $("#div3").fadeIn(3000);
});

fadeIn()
fadeOut()
fadeToggle()
fadeTo()

$("button").click(function(){
  $("#div1").fadeTo("slow", 0.15);
  $("#div2").fadeTo("slow", 0.4);
  $("#div3").fadeTo("slow", 0.7);
});

///////////////////////slide///////////////////

slideDown()
slideUp()
slideToggle()

$("#panel").slideDown();
$("#panel").slideUp(1000);
$("#panel").slideUp("slow");
$("#panel").slideToggle();

///////////////////////animation//////////////////

$(selector).animate({params},speed,callback);

$("button").click(function(){
  $("div").animate({left: '250px'});
}); 

$("button").click(function(){
  $("div").animate({
    left: '250px',
    opacity: '0.5',
    height: '150px',
    width: '150px'
  });
});

$("div").animate({
    height: 'toggle'   /// "show", "hide", or "toggle":
  });

 $("div").animate({
    left: '250px',
    height: '+=150px',
    width: '+=150px'
  });

$("button").click(function(){
  var div = $("div");
  div.animate({height: '300px', opacity: '0.4'}, "slow");
  div.animate({width: '300px', opacity: '0.8'}, "slow");
  div.animate({height: '100px', opacity: '0.4'}, "slow");
  div.animate({width: '100px', opacity: '0.8'}, "slow");
});

///////////////stop//////////////////////////

$(selector).stop(stopAll,goToEnd);

$("#flip").click(function(){
    $("#panel").slideDown(5000);
  });
  $("#stop").click(function(){
    $("#panel").stop();
  });

////////////////callback//////////////

 $("p").hide("slow", function(){
      alert("The paragraph is now hidden"); // after hide fun. is callback
    });

////////////////////////////changing//////////////

$("#p1").css("color", "red").slideUp(2000).slideDown(2000); // slide up 2s then slide down 2s

/////////////////////get//////////////////////

$("#test").text()
$("#test").html()
$("#test").val()

$("#w3s").attr("href")

///////////////////set////////////////////////

$("#test").text("Hello world!")
$("#test").html("<b>Hello world!</b>")
$("#test").val("Dolly Duck")

////////////////////////add////////////////

 $("p").append(" <b>Appended text</b>.");
 $("p").prepend("Some prepended text.");
 $("img").after("Some text after");      //inserts content after the selected HTML elements.
 $("img").before("Some text before");    //inserts content BEFORE the selected HTML elements.

 ////////////////////remove/////////////////

 $("#div1").remove(); //Removes the selected element (and its child elements)
  $("#div1").empty(); //removes the child elements

  $("p").remove(".test, .demo");

//////////////////////css classes////////////////

$("h1, h2, p").addClass("blue");
  $("div").addClass("important");

$("h1, h2, p").removeClass("blue");

$("h1, h2, p").toggleClass("blue");

//////////////////////////css property/////////////////

$("p").css("background-color"); // return #fff
$("p").css("background-color", "yellow"); // one
$("p").css({"background-color": "yellow", "font-size": "200%"}); // multi

////////////////diamention////////////////////////

width()
height()
innerWidth()
innerHeight()
outerWidth()
outerHeight()

$("#div1").width()
$("#div1").height()
$("#div1").innerWidth() // returns the width of an element (includes padding).
$("#div1").innerHeight() // returns the height of an element (includes padding).
$("#div1").outerWidth() // returns the width of an element (includes padding and border).
$("#div1").outerHeight(); // returns the height of an element (includes padding and border).

outerWidth(true) - returns the width of an element (includes padding, border, and margin).
outerHeight(true) - returns the height of an element (includes padding, border, and margin)

$(document).height()
$(window).width()

$("#div1").width(500).height(500); // resize

var txt = "";
    txt += "Width of div: " + $("#div1").width() + "</br>";
    txt += "Height of div: " + $("#div1").height() + "</br>";
    txt += "Outer width of div: " + $("#div1").outerWidth() + "</br>";
    txt += "Outer height of div: " + $("#div1").outerHeight();
    $("#div1").html(txt);

///////////////////Traversing////////////////////////////////

$("span").parent().css({"color": "red", "border": "2px solid red"}); // add css in parent of span
 $("span").parents().css({"color": "red", "border": "2px solid"}); // add css in all patent of span

 $("span").parentsUntil("div").css({"color": "red", "border": "2px solid red"});

/////////////////////////

<div class="descendants" style="width:500px;">div (current element) 
  <p class="first">p (child)
    <span>span (grandchild)</span>   
  </p>
  <p class="second">p (child)
    <span>span (grandchild)</span>
  </p> 
</div>

$("div").children().css({"color": "red", "border": "2px solid red"}); // add css in all children
$("div").children("p.first").css({"color": "red", "border": "2px solid red"}); // add css in only class first

$("div").find("span").css({"color": "red", "border": "2px solid red"}); // add css in all span
$("div").find("*"); // all inside div

/////////////////////siblings///////////////

siblings()
next()
nextAll()
nextUntil()
prev()
prevAll()
prevUntil()

$("h2").siblings().css({"color": "red"}); // add css siblings of h2 (add css except h2)
$("h2").siblings("p").css({"color": "red"}); // add css sibling(only in p) of h2 
$("h2").next().css({"color": "red"}); // add css to next only one sibling
$("h2").nextAll().css({"color": "red"}); // add css to next all siblings
$("h2").nextUntil("h6").css({"color": "red"}); // add css to next h6(before) siblings

//////////////////////Filtering///////////////////////

first(), last(), eq(), filter() and not()


$("div").first().css({"color": "red"}); // add css only one first element(next)
$("div").last().css({"color": "red"}); // add css only one last element
$("div").eq(1).css({"color": "red"}); // add css p index 1 element (index start from 0)
$("div").filter(.intro).css({"color": "red"}); // add css only all .intro 
$("div").not(.intro).css({"color": "red"}); // add css except all .intro 

//////////////////////////AJAX////////////////////////

$(selector).load(URL,data,callback);

 $("button").click(function(){
    $("#div1").load("demo_test.txt");
  });

$("#div1").load("demo_test.txt #p1"); // txt in p with id p1

responseTxt - contains the resulting content if the call succeeds
statusTxt - contains the status of the call
xhr - contains the XMLHttpRequest object

$("button").click(function(){
  $("#div1").load("demo_test.txt", function(responseTxt, statusTxt, xhr){
    if(statusTxt == "success")
      alert("External content loaded successfully!");
    if(statusTxt == "error")
      alert("Error: " + xhr.status + ": " + xhr.statusText);
  });
});

//////////////////AJAX get() and post()///////////////////////

GET - Requests data from a specified resource (GET method may return cached data)
POST - Submits data to be processed to a specified resource

$.get(URL,callback);
$.post(URL,data,callback);

$("button").click(function(){
  $.get("demo_test.asp", function(data, status){
    alert("Data: " + data + "\nStatus: " + status);
  });
});

$("button").click(function(){
  $.post("demo_test_post.asp",
  {
    name: "Donald Duck",
    city: "Duckburg"
  },
  function(data, status){
    alert("Data: " + data + "\nStatus: " + status);
  });
});

////////////////////////////noConflict////////////////

noConflict() method releases the hold on the $ shortcut identifier, so that other scripts can use it.
You can of course still use jQuery, simply by writing the full name instead of the shortcut:

$.noConflict();
jQuery(document).ready(function(){
  jQuery("button").click(function(){
    jQuery("p").text("jQuery is still working!");
  });
});

var jq = $.noConflict();
jq(document).ready(function(){
  jq("button").click(function(){
    jq("p").text("jQuery is still working!");
  });
});


















