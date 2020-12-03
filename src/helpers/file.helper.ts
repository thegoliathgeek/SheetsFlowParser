import fs from 'fs';
import path from 'path';
import FunctionHelper from "./function.helper";

export default class FileHelper {
    static jsonToFile(data: any, filePath: string = 'storage', filename?: string) {
        const stringJson = JSON.stringify(data, undefined, 2);
        fs.writeFileSync(path.resolve(__dirname, `../../${filePath}/${filename ?? FunctionHelper.getUUID4()+'.json'}`), stringJson);
    }

    static writeToLogFile(data: string, filePath: string = 'storage', filename: string = 'debug'){
        fs.appendFileSync(path.resolve(__dirname, `../../${filePath}/log/${filename ?? FunctionHelper.getUUID4()+'.txt'}`), data);
    }
}