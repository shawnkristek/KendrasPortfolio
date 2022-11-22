import fs from 'fs';
import path from 'path';


export function getAllSlides(slideShowDirectory) {
    const dirRelativeToPublicFolder = "images/" + slideShowDirectory;

    const dir = path.resolve('./public', dirRelativeToPublicFolder);

    const fileNames = fs.readdirSync(dir);

    return fileNames.map( fileName => {
        const num = parseInt(fileName.split('.')[0]);

        return {
            url: path.join('/', dirRelativeToPublicFolder, fileName),
            seq: num,
        }
    }).sort((a,b) => {
      return a.seq - b.seq;
    });
}