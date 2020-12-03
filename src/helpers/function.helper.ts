import {v4 as uuid4} from 'uuid';

export default class FunctionHelper {

    static getUUID4() {
        return uuid4();
    }
}