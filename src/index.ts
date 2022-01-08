import { readFromConsole } from "./tools/readFromConsole"
import { greet } from "./tools/weirdthings";


const askforName = async () => {
	const name: string = await readFromConsole("What is your name? ");
	console.log(greet(name));
}

askforName();