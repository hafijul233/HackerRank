<?php
$handle = fopen ("php://stdin","r");
$i = 4;
$d = 4.0;
$s = "HackerRank ";
// Declare second integer, double, and String variables.
$int = 0;
$double = 0.0;
$string = '';

// Read and save an integer, double, and String to your variables.
$_fp = fopen("php://stdin", "r");

$int = (int)fgets($_fp);
$double = (double)fgets($_fp);
$string = (string)fgets($_fp);
// Print the sum of both integer variables on a new line.
echo ($i + $int) . PHP_EOL;
// Print the sum of the double variables on a new line.
echo number_format(($d + $double), 1) . PHP_EOL;

// Concatenate and print the String variables on a new line
// The 's' variable above should be printed first.
echo $s . $string;
fclose($handle);
?>