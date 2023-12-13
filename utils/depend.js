const dependendencies = [
   // inquirer = require('inquirer'),
    { prompt } = require('enquirer'),
    fs = require('fs'),
    { execSync } = require('child_process'),
    questions = require('./quest.js'),
    Shapes = require('../lib/shapes.js'),
    spawnSVG = require('./spawn.js'),

];

module.exports = dependendencies;

