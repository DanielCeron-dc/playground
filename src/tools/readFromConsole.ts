
import * as readline from "readline";

export const readFromConsole = async (message: string): Promise<string> => {

    const rd1 = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    return new Promise<string>((resolve) => {
        rd1.question(message, (answer) => {
            resolve(answer);
            rd1.close();
        });
    })
}; 
