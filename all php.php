<!DOCTYPE html>
<html>
<body>

<h1>My first PHP page</h1>

<?php
echo "Hello World!"; 

$x = 5; // asign variables
$y = 7; 
echo $x + $y ; // display
echo "My car is " . $x . "<br>";

$txt = "W3Schools.com";
echo "I love $txt!";

function myTest() {
    // using x inside this function will generate an error
    echo "<p>Variable x inside function is: $x</p>";
} 
myTest();

echo "<p>Variable x outside function is: $x</p>";
echo "This ", "string ", "was ", "made ", "with multiple parameters.";
print "<h2>PHP is Fun!</h2>";

var_dump($x); // for data type

echo strlen("Hello world!"); // length of string
echo str_word_count("Hello world!"); // outputs 2
echo strpos("Hello world!", "world"); // outputs 6 search word
echo str_replace("world", "Dolly", "Hello world!"); // outputs Hello Dolly! replace text

// case-sensitive constant name
define("GREETING", "Welcome to W3Schools.com!");
echo GREETING; // return Welcome to W3Schools.com!


// ++$x	Pre-increment	Increments $x by one, then returns $x
// $x++	Post-increment	Returns $x, then increments $x by one
// --$x	Pre-decrement	Decrements $x by one, then returns $x
// $x--	Post-decrement	Returns $x, then decrements $x by one

// &&	And 	$x && $y	True if both $x and $y are true
// ||	Or 	    $x || $y	True if either $x or $y is true
// !	Not 	!$x	        True if $x is not true

$txt1 .= $txt2;
echo $txt1; // txt1=txt1+txt2

if ($t < "20") {
    echo "Have a good day!";
}

for ($x = 0; $x <= 10; $x++) {
    echo "The number is: $x <br>";
} 

function familyName($fname) {
    echo "$fname Refsnes.<br>";
}
familyName("Jani");

$cars = array("Volvo", "BMW", "Toyota");
echo "I like " . $cars[0] . ", " . $cars[1] . " and " . $cars[2] . ".";
echo count($cars); // Length of an Array

$age = array("Peter"=>"35", "Ben"=>"37", "Joe"=>"43");
echo "Peter is " . $age['Peter'] . " years old.";

$age = array("Peter"=>"35", "Ben"=>"37", "Joe"=>"43");
foreach($age as $x => $x_value) {
    echo "Key=" . $x . ", Value=" . $x_value;
    echo "<br>";
}

// sort() - sort arrays in ascending order
// rsort() - sort arrays in descending order
// asort() - sort associative arrays in ascending order, according to the value
// ksort() - sort associative arrays in ascending order, according to the key
// arsort() - sort associative arrays in descending order, according to the value
// krsort() - sort associative arrays in descending order, according to the key

$cars = array("Volvo", "BMW", "Toyota");
sort($cars);

?>

</body>
</html>