import * as readline from "readline";

const rd1 = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rd1.question("whats your name ?  ", (answer) => {
	console.log("hello " + answer);
	rd1.close();
}); 
