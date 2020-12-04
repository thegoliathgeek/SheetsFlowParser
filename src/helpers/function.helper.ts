import {v4 as uuid4} from 'uuid';
import FileHelper from "./file.helper";

export default class FunctionHelper {

    static getUUID4() {
        return uuid4();
    }

    static messsageTypeDifferentiator(data: String): { message_type: string, block_type: string } {
        data.trim();
        const arr = data.split('-');
        if (!arr.length) {
            FileHelper.writeToLogFile('Message Type And Block type are undefined')
        }
        return {
            block_type: arr[0].trim(),
            message_type: arr[arr.length - 1].trim()
        }
    }

    static getTrainingPhrases(data: string): { parts: { text: string }[] }[] {
        const arr = data.split(',');
        const tempPhrases: { parts: { text: string }[] }[] = [];
        arr.forEach((val) => {
            tempPhrases.push({
                parts: [{text: val}]
            });
        });
        return tempPhrases;
    }
}

