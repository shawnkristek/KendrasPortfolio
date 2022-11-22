import fs from 'fs';
import path from 'path';


export function getAllSlides(slideShowDirectory) {
    const dirRelativeToPublicFolder = "images/" + slideShowDirectory;
    const dir = path.resolve('./public', dirRelativeToPublicFolder);
    const fileNames = fs.readdirSync(dir);

    return fileNames.map( fileName => {
        let nameOnly = fileName.split('.')[0];
        let [seq, dimensions] = nameOnly.split('_');
        let [width, height] = String(dimensions).split('x');

        return {
            key: nameOnly,
            url: path.join('/', dirRelativeToPublicFolder, fileName),
            seq: parseInt(seq),
            width: parseInt(width),
            height: parseInt(height),
        }
    }).sort((a,b) => {
      return a.seq - b.seq;
    });
}