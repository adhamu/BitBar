#!/usr/bin/env php

<?php

require __DIR__."/../../vendor/autoload.php";

use SteveEdson\BitBar;
use Symfony\Component\Process\Process;

$bb = new BitBar;
$line = $bb->newLine();
$line->setText("⌘")->setColour("purple")->show();
$line = $bb->newLine();
$line->setText("Local IP: ".runCommand("ipconfig getifaddr en0"))->show();
$line->setText("Local IP: ".runCommand("ipconfig getifaddr en0"))->show();

function runCommand($command) {
    $process = new Process($command);
    $process->setTimeout(3600);
    $process->run();

    $output = str_replace(["\n", "\r"], "", $process->getOutput());
    return $output;
}