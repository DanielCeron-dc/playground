
import * as readline from "readline";

export const readFromConsole = (message: string): string => {

    const rd1 = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rd1.question(message, (answer) => {
        rd1.close();
        return answer;
    });

    return "";
}; 
