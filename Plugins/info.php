#!/usr/local/bin/php

<?php

require "/Users/amitdhamu/BitBar/vendor/autoload.php";

use SteveEdson\BitBar;

// Create BitBar formatter
$bb = new BitBar();

// Create the first line
$line = $bb->newLine();

// Set the text and formatting
$line
    ->setText("★")
    ->setColour("purple")
    ->show();

$line = $bb->newLine();

// Set the text and formatting
$line
    ->setText("Hello World")
    ->setColour("yellow")
    ->setUrl("https://steveedson.co.uk")
    ->show();