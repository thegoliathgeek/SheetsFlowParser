import {IndexDefinitionConstant} from "../constants/index.definition.constant";
import {FLOW_CONTAINER, TYPE_MESSAGE_TEXT, TYPE_TEXT_SUB_ITEM} from "../constants/block.schema.constant";
import FunctionHelper from "../helpers/function.helper";
import FileHelper from "../helpers/file.helper";

export default class BlockBuilderService {

    static buildBlocks(data: any[]) {
        const addedUpdatedHolder: any[] = [];
        let currentIndex = -1;
        data.forEach((obj, index) => {
            if (obj.length && index >= 3) {
                const interaction = obj[IndexDefinitionConstant.interaction]
                if (interaction) {
                    currentIndex += 1;
                    addedUpdatedHolder.push({...FLOW_CONTAINER()});
                } else if (obj[IndexDefinitionConstant.message_type]) {
                    const {message_type, block_type} = FunctionHelper.messsageTypeDifferentiator(obj[IndexDefinitionConstant.message_type])
                    switch (block_type) {
                        case 'Send A Message':
                            break;
                    }

                }
            }
        })
        FileHelper.jsonToFile(addedUpdatedHolder);
        return addedUpdatedHolder;
    }
}