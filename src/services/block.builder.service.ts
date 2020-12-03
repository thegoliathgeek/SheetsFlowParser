import {IndexDefinitionConstant} from "../constants/index.definition.constant";
import {FLOW_CONTAINER} from "../constants/block.schema.constant";
import FunctionHelper from "../helpers/function.helper";
import FileHelper from "../helpers/file.helper";
import BlockBuilderHelper from "../constants/block.builder.helper";

export default class BlockBuilderService {

    static buildBlocks(data: any[], language: string = 'it') {
        const addedUpdatedHolder: any[] = [];
        let currentIndex = -1;
        data.forEach((obj, index) => {
            if (obj.length && index >= 3) {
                const interaction = obj[IndexDefinitionConstant.interaction]
                if (interaction) {
                    currentIndex += 1;
                    addedUpdatedHolder.push(obj[IndexDefinitionConstant.utterance] ? {
                        ...FLOW_CONTAINER(), config: {
                            intentObject: [{
                                key: language,
                                value: {
                                    trainingPhrases: FunctionHelper.getTrainingPhrases(obj[IndexDefinitionConstant.utterance])
                                }
                            }]
                        }
                    } : {...FLOW_CONTAINER()});
                } else if (obj[IndexDefinitionConstant.message_type]) {
                    const {message_type, block_type} = FunctionHelper.messsageTypeDifferentiator(obj[IndexDefinitionConstant.message_type])
                    switch (block_type) {
                        case 'Send A Message':
                            BlockBuilderHelper.identifyMessageTypeAndBuild(message_type, addedUpdatedHolder[currentIndex], obj);
                            break;
                        default:
                            console.log('Need to add this block ' + message_type)
                            break;
                    }
                }
            }
        })
        FileHelper.jsonToFile(addedUpdatedHolder);
        return addedUpdatedHolder;
    }
}