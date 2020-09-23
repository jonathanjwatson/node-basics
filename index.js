// console.log("Hello world!");

// ALERTS, PROMPTS, AND CONFIRMS WON'T WORK
// alert("This won't work!");
// prompt("Why won't this work?");
// confirm("Are you sure this won't work?");

// PROCESS.ARGV allows us to accept user input from the command line.
// process.argv returns an array
// The first element in the array, is the location of Node on your machine.
// The second element in the array, is the location of the file you are running.
// Any user input will begin at index 2. 
// console.log(process.argv);

// User Input
// console.log(process.argv[2]);

// TO USE A MODULE
// 1. The module must be exported
// 2. The module must imported

// SOME MODULES ARE BUILT INTO NODE
// fs or FileSystem is built into node
// No installation required
var fs = require("fs");

// readFile, writeFile, appendFile

// SOME MODULE ARE NOT BUILT INTO NODE
// inquirer is one such module
// When a module is "packaged" up for distribution we call it a package. 
// Packages are hosted on npmjs.com

// PROCESS FOR INSTALLING 3RD PARTY PACKAGES
// 1. npm init (-y) (-y is optional, answers 'yes' to all questions - boilerplate) creates package.json in the root of the directory
// 2. npm install **PACKAGE_NAME** (should see node_modules folder and package-lock.json || confirm the installation in package.json dependencies)

var inquirer = require("inquirer");





