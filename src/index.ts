import * as files from './tools/files';

const filefunction = async (): Promise<void> => {

    files.createFile("files/test.txt", "Hello World!  \n dasdaddaa dads");
    const file = await files.readFiletxt("test.txt");
    console.log(file);
    console.log("Hello World!");

}

filefunction();
