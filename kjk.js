console.log("=========Array=========");
var nm = ["om","km","lk","dj"]; //array
nm[2]="gh";  // change value
nm.push("Lemon1");    // adds a new element from last
nm[nm.length-3] = "Lemon2";    // adds a new element from last
nm.pop();              // Removes & returns the value of last element
nm.push("Kiwi");       //  Adds & returns the value of last element
nm.shift();            // Removes & returns the value of first element
nm.unshift("Lemon");    // Adds a new element & returns the value of first element
delete nm[1];         //delete 
nm.splice(2, 1, "Lemon", "Kiwi"); // add new 2 elements & remove 1 element
nm.splice(0, 1);        // 0 - where should be added(remove but not including) & 1 - defines how many removed

var myGirls = ["Cecilie", "Lone"];
var myBoys = ["Emil", "Tobias", "Linus"];
var myen = myGirls.concat(myBoys);   // Concatenates (joins) myGirls and myBoys 
var nbnm=myGirls.concat(myBoys, myen); // joins all. it can take any number of array
nm.slice(2); // slices out from starting to [2]
nm.slice(1, 3); // remove except [1] & [3]
nm.toString(); // return comma separated string

for (i = 0; i < nm.length; i++) {
	nm[i]; 

	console.log("No.",i,nm[i]);
};


console.log("========Object==========");

var person = {fname:"John", lname:"Doe", age:25}; // object
person.lagu = "English"; //add new property in last
delete person.age;       // delete property in object
person.fname="kalu";     // change value
var x;
for (x in person) {

	console.log("No.",x,person[x]);
}

console.log("========JSON==========");

var myObj = { name: "John", age: 31, city: "New York" };
var myJSON = JSON.stringify(myObj);  // Convert a js object into a JSON string (Sending Data)
var myObj1 = JSON.parse(myJSON); // convert json to js object (Receiving Data)

console.log("========String==========");

var txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var sln = txt.length;
                                            // \n	New Line
var str12 = "Please locate where 'locate' occurs!";
/////search string
str12.indexOf("locate"); // counts positions from zero for 1st locate
str12.lastIndexOf("locate"); // for last locate
str12.indexOf("locate",15);  // starting from 15
str12.search("locate"); // can also search regular expressions
/////slice string
var str13 = "Apple, Banana, Kiwi";
str13.slice(7);  // slice 7 from start
str13.slice(-12); // slice 12 from last
str13.slice(7, 13);  // slice 7 and 13 from start
str13.slice(-12, -6); // slice 12 and 6 from last

str.substring(7, 13); // similar to slice but not except -ve value
str.substr(7, 6);  // start from 7 to 6
str.substr(7); // slice from 7
str.substr(-4); // from last 4

str = "Please visit Microsoft!";
str.replace("Microsoft", "W3Schools"); // replace 1st to 2nd (replaces only the first)
str.replace(/MICROSOFT/i, "W3Schools"); // for case-sensitive
str.replace(/Microsoft/g,"W3Schools"); // replace all
str.toLowerCase();
str.toUpperCase();

var text1 = "Hello";
var text2 = "World";
var text3 = text1.concat(" ", text2); // joins two or more strings

var text = "Hello" + " " + "World!";

var str1 = "       Hello World!        ";
str1.trim(); // removes whitespace from both sides of a string

var str2 = "HELLO WORLD";
str2.charAt(0); // returns H
str[0];        // returns H (string as an array, you can convert it to an array.)

var txt = "annn,bbvvv,cbb,dbvb,ebv,h jhhj|ok";   // String
txt.split(",");   // Split strings on commas
txt.split(" ");   // Split strings on spaces
txt.split("|");   // Split strings on pipe
txt.split("");    // Split strings in characters


console.log("========Number==========");

var x = 123e5;    // 12300000
var y = 123e-5;   // 0.00123

var mn = 7;   // number
var bn = "5"; // string

var bh = "The result is: " + x + y; // x & y add as a string

var x1 = "100";
var y1 = "10";
var z = x1 / y1;       // z will be 10

var x = 0xFF;           // x will be 255

var myNumber = 32;
myNumber.toString(10);  // returns 32 decimal
myNumber.toString(32);  // returns 10 
myNumber.toString(16);  // returns 20 hexadecimal
myNumber.toString(8);   // returns 40 octal
myNumber.toString(2);   // returns 100000 binary

var x = 9.656;
x.toFixed(0);           // returns 10
x.toFixed(2);           // returns 9.66
x.toFixed(4);           // returns 9.6560
x.toFixed(6);           // returns 9.656000

var x = 9.656;
x.toPrecision();        // returns 9.656
x.toPrecision(2);       // returns 9.7
x.toPrecision(4);       // returns 9.656
x.toPrecision(6);       // returns 9.65600

Number(true);          // returns 1
Number(false);         // returns 0
Number("10");          // returns 10
Number("  10");        // returns 10
Number("10  ");        // returns 10
Number(" 10  ");       // returns 10
Number("10.33");       // returns 10.33
Number("10,33");       // returns NaN
Number("10 33");       // returns NaN 
Number("John");        // returns NaN

parseInt("10");         // returns 10
parseInt("10px");         // returns 10
parseInt("10.33");      // returns 10
parseInt("10 20 30");   // returns 10
parseInt("10 years");   // returns 10
parseInt("years 10");   // returns NaN 


console.log("========Number==========");

var x;           // Now x is undefined
x = 5;           // Now x is a Number
x = "John";      // Now x is a String
var car = "";              // The value is "", the typeof is "string"
typeof ""                  // Returns "string"

var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
person = null;        // Now value is null, but type is still an object
person = undefined;   // Now both value and type is undefined

typeof undefined           // undefined
typeof null                // object

null === undefined         // false
null == undefined          // true

typeof {name:'John', age:34} // Returns "object"
typeof [1,2,3,4]             // Returns "object" (not "array", see note below)
typeof null                  // Returns "object"
typeof function myFunc(){}   // Returns "function"

var x = 5;
x++; // increments numbers
var z = x ** 2;          // result is 25
var z = Math.pow(x,2);   // result is 25

console.log("========MATH==========");

Math.round(4.7);    // returns 5
Math.round(4.4);    // returns 4
Math.sqrt(64);      // returns 8
Math.abs(-4.7);     // returns 4.7
Math.ceil(4.4);     // returns 5 rounded up
Math.floor(4.7);    // returns 4 rounded down

Math.min(0, 150, 30, 20, -8, -200);  // returns -200
Math.max(0, 150, 30, 20, -8, -200);  // returns 150
Math.random();     // returns a random number

var  x = 10;
// Here x is 10
{  
  let x = 2;
  // Here x is 2
}
// Here x is 10


var x = 10;
// Here x is 10
{ 
  const x = 2;
  // Here x is 2
}
// Here x is 10

var numbers = [4, 9, 16, 25, 29];
var first = numbers.find(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}

var first = numbers.findIndex(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}

// ES5
var x = function(x, y) {
   return x * y;
}

// ES6
const x = (x, y) => x * y;

debugger; // code below should stop executing


let i = 5;
for (let i = 0; i < 10; i++) {
  // some statements
}
// Here i is 5 


var i = 5;
for (var i = 0; i < 10; i++) {
  // some statements
}
// Here i is 10


onclick="this.style.display='none'"


&&	and	(x < 10 && y > 1) is true	
||	or	(x == 5 || y == 5) is false	Try 
!	not	!(x == y) is true



var i;
for (i = 0; i < cars.length; i++) { 
  text += cars[i] + "<br>";
}

if (time < 10) {
  greeting = "Good morning";
} else if (time < 20) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}



var x = "0";
switch (x) {
  case 0:
    text = "Off";
    break;
  case 1:
    text = "On";
    break;
  default:
    text = "No value found";
}


while (i < 10) {
  text += "The number is " + i;
  i++;
}

do {
  text += "The number is " + i;
  i++;
}
while (i < 10);

for (;cars[i];) {
  text += cars[i] + "<br>";
  i++;
}

while (cars[i]) {
  text += cars[i] + "<br>";
  i++;
}

for (i = 0; i < 10; i++) {
  if (i === 3) { break; }  // jump out of a loop
  text += "The number is " + i + "<br>";
}

for (i = 0; i < 10; i++) {
  if (i === 3) { continue; } // continues with the next iteration in the loop.
  text += "The number is " + i + "<br>";
}

list: {
  text += cars[0] + "<br>"; 
  text += cars[1] + "<br>"; 
  break list;               //
  text += cars[2] + "<br>"; 
  text += cars[3] + "<br>"; 
}

///The continue statement (with or without a label reference) can only be used to skip one loop iteration.

//The break statement, without a label reference, can only be used to jump out of a loop or a switch.
//With a label reference, the break statement can be used to jump out of any code block:

String(123);       // returns (Convert Numbers to String) 
(123).toString()  // same as avobe

Number("3.14")    // returns 3.14 (Convert String to Numbers) 

var y = "5";      // y is a string
var x = + y;      // x is a number  (convert a variable to a number)

Number(false)     // returns 0
Number(true)      // returns 1 (convert booleans to numbers)

///Automatic Type Conversion
5 + null    // returns 5         because null is converted to 0
"5" + null  // returns "5null"   because null is converted to "null"
"5" + 2     // returns "52"      because 2 is converted to "2"
"5" - 2     // returns 3         because "5" is converted to 5
"5" * "2"   // returns 10        because "5" and "2" are converted to 5 and 2

// if myVar = 123             // toString converts to "123"
// if myVar = true            // toString converts to "true"
// if myVar = false           // toString converts to "false"

"0"     	0     "0"	             true  //Original Value|Converted to Number|Converted to String|Converted to Boolean
"000"   	0     "000" 	         true
{ }	        NaN	  "[object Object]"	 true	
null    	0	  "null"        	 false	
undefined	NaN   "undefined"   	 false
[ ]     	0   	""             	 true
""      	0   	""             	 false

var x;
  try { 
    if(x == "")  throw "empty";
    if(isNaN(x)) throw "not a number";
    x = Number(x);
    if(x < 5)  throw "too low";
    if(x > 10)   throw "too high";
  }
  catch(err) {
    message.innerHTML = "Input is " + err;
  }
  finally {
    document.getElementById("demo").value = "";
  }


// EvalError	An error has occurred in the eval() function
// RangeError	A number "out of range" has occurred
// ReferenceError	An illegal reference has occurred
// SyntaxError	A syntax error has occurred
// TypeError	A type error has occurred
// URIError	An error in encodeURI() has occurred

var x = 0;
if (x == 10); // return false

var x = 0;
if (x = 10); // if statement returns true (maybe not as expected), because 10 is true

var x = 0;
if (x = 0); // if statement returns false (maybe not as expected), because 0 is false

var x = 10;
var y = "10";
if (x == y); // In regular comparison, data type does not matter. returns true

var x = 10;
var y = "10";
if (x === y); // In strict comparison, data type does matter. returns false


var x = 10;
switch(x) {
  case 10: alert("Hello");  // case switch will display an alert
}

var x = 10;
switch(x) {
  case "10": alert("Hello"); // case switch will not display an alert
}


var x = 0.1;
var y = 0.2;
var z = x + y; // return 0.30000000000000004

for (var i = 0; i < 10; i++) {
  // some code
}
return i; // return i=10

// onchange	An HTML element has been changed
// onclick	The user clicks an HTML element
// onmouseover	The user moves the mouse over an HTML element
// onmouseout	The user moves the mouse away from an HTML element
// onkeydown	The user pushes a keyboard key
// onload	The browser has finished loading the page

document.getElementById("demo").innerHTML;


// Writing into an HTML element, using innerHTML.
// Writing into the HTML output using document.write().
// Writing into an alert box, using window.alert().
// Writing into the browser console, using console.log().


// document.getElementById()	Returns the element that has the ID attribute with the specified value
// document.getElementsByClassName()	Returns a NodeList containing all elements with the specified class name
// document.getElementsByName()	Returns a NodeList containing all elements with a specified name
// document.getElementsByTagName()	Returns a NodeList containing all elements with the specified tag name

document.getElementsByTagName("animal") // only for input with name attribute


// Infinity	A numeric value that represents positive/negative infinity
// NaN	"Not-a-Number" value
// undefined	Indicates that a variable has not been assigned a value


/////////////////////////////////////////////////////////////////////////////////////////////////////////

var X = document.getElementById("intro");        
var x = document.getElementsByTagName("p");      
var x = document.getElementsByClassName("intro");
var x = document.querySelectorAll("p.intro");    


element.innerHTML = new html content     || Exam:- object.innerHTML/.innerText/.textContent = "<p>Dog</p>";
element.attribute = new value            || Exam:- object.src = "landscape.jpg"; element.style.property=newstyle          || Exam:- object.style.color="blue"; 
element.setAttribute(attribute, value)   || Exam:- object.setAttribute("style", "background-color: red;"); element.removeAttribute(attributename)   || Exam:- object.removeAttribute("href");

var element = document.getElementById("div1");
element.classList.add("otherclass");

element.classList.remove("otherclass");

var d = document.getElementById("div1");
d.className += " otherclass";

setTimeout(fn,100); // fn wait for 100ms and run only once

setInterval(fn,800); // fn run reapeated every after 800ms


<p>Click the button to open a new window called  with some text.</p>

<button onclick="myFunction()">Try it</button>

<script>
function myFunction() {
    var myWindow = window.open("", "MsgWindow", "width=200,height=100");
    myWindow.document.write("<p>This is 'MsgWindow'. I am 200px wide and 100px tall!</p>");
}
</script>