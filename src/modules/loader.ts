import { existsSync, readFileSync } from 'fs';
import conf from '../config';
import { isDev } from '../index';

/**
 * Load a file with code
 * @param file - The file to load
 */
export default (file: string) => {

    const filePath = `${__dirname}/../../${file}${conf.extension}`;
    isDev && console.log(`'\n :: Loading ${filePath} ::`);
    if (!existsSync(filePath)) throw new Error("LoaderError: File or directory not found");
    return readFileSync(filePath, 'utf8');

}

