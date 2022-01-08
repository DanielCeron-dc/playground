
import * as readline from "readline";

export const readFromConsole = async (message: string, convertToNumber?: boolean): Promise<string | number> => {

    const rd1 = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    return new Promise((resolve) => {
        rd1.question(message, (answer: string) => {
            if (convertToNumber) {
                try {
                    resolve(parseInt(answer));
                } catch (error) {
                    throw new Error("the value that was entered is not a number");
                }
                return;
            }
            resolve(answer);

        });
    });
}; 
