import { readFromConsole } from "tools/readFromConsole"

const response: string = readFromConsole("What is your name?");
console.log("Hello " + response);
