import fs from 'fs';
import path from 'path';
import FunctionHelper from "./function.helper";

export default class FileHelper {
    static jsonToFile(data: any, filePath: string = 'storage', filename?: string) {
        const stringJson = JSON.stringify(data, undefined, 2);
        fs.writeFileSync(path.join(__dirname, `../../${filePath}/${filename ?? FunctionHelper.getUUID4()}`), stringJson);
    }
}