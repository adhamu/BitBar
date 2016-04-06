#!/usr/bin/env php

<?php

require __DIR__."/../vendor/autoload.php";

use SteveEdson\BitBar;

// Create BitBar formatter
$bb = new BitBar;

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
    ->setColour("brown")
    ->setUrl("https://steveedson.co.uk")
    ->show();