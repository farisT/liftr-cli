import { writeFile } from 'fs';

export const createServer = (setupFilepath: string) => {
    const fileContent = `import app from './app';
import { Liftr } from '@liftr/core';

const server = Liftr.server(app);

export default server;
    `;
    let filepath: string;
    if (setupFilepath) {
        filepath = setupFilepath;
    } else {
       filepath = process.cwd() + '/server.ts';
    }
    writeFile(filepath, fileContent, (err) => {
        if (err) throw err;
    });
};
