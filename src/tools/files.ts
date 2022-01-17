
import fs from "fs";

export const createFile = async (filePath: string, content: string): Promise<void> => {
    return new Promise<void>((resolve, reject) => {
        fs.writeFile(filePath, content, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve();
            }
        });
    });
}

export const readFiletxt = async (filePath: string): Promise<string> => {
    return new Promise<string>((resolve, reject) => {
        fs.readFile(filePath, "utf8", (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
}