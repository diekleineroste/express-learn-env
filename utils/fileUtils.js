import path from "path";
import fs from "fs";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const readFolder = (folderName) => {
    const folderLocation = path.join(__dirname, '..', 'public', folderName);

    if (!fs.existsSync(folderLocation)) return

    let readFiles = []
    fs.readdirSync(folderLocation).forEach((f) => {
        readFiles.push(readFile(path.join(folderLocation, f)))
    })

    return readFiles;
}

const readFile = (fileLocation) => {
    let fileContent = fs.readFileSync(fileLocation, { encoding: 'utf8' });
    return  JSON.parse(fileContent);
}

export {
    readFolder,
    readFile
}
