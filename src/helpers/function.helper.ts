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

    static canvasAutoArrange(xStart: number = 12, yStart: number = 18, list: any[]) {
        let maxY = 2000;
        let maxX = 3000;
        const incrementX = 435;
        const incrementY = 70;
        let startX = -(xStart + 200);
        let startY = 200;
        const returnObj: any[] = [];
        for (const obj of list) {
            startX += incrementX;
            if (startX > maxX) {
                if (startY > maxY) {
                    maxY += 200;
                    maxX += 200;
                }
                startY += incrementY;
                startX = xStart;
            }
            returnObj.push({
                ...obj,
                canvas: {
                    position: {
                        x: startX,
                        y: startY
                    }
                }
            });
        }
        return returnObj;
    }

    static arrangeLookingDeep = (list: any[], newList: any[], tracker: any[], id = "", connect = "") => {
        if (id === null) {
            return newList;
        }
        for (const obj of list) {
            if (obj.id === id || id === "") {
                if (!tracker.includes(obj.id)) {
                    tracker.push(obj.id);
                    newList.push(obj);
                    FunctionHelper.arrangeLookingDeep(list, newList, tracker, obj.connect, connect)
                }
            }
        }
        return newList;
    }
}

