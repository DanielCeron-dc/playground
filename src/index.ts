import { readFromConsole } from "./tools/readFromConsole"
import { greet } from "./tools/weirdthings";

const response: string = readFromConsole("What is your name?");
console.log(greet(response));
