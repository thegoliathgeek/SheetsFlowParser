import {TYPE_MESSAGE_TEXT, TYPE_TEXT_SUB_ITEM} from "./block.schema.constant";
import {IndexDefinitionConstant} from "./index.definition.constant";

export default class BlockBuilderHelper {
    static identifyMessageTypeAndBuild(messageType: string, tempHolder: any, data: any[], language: string = 'it') {
        switch (messageType) {
            case 'Text':
                tempHolder.blocks.push({
                    ...TYPE_MESSAGE_TEXT(),
                    blocks: [
                        {
                            ...TYPE_TEXT_SUB_ITEM(language),
                            questions: [{
                                key: language,
                                values: [data[IndexDefinitionConstant.bot_message]]
                            }]
                        }
                    ]
                });
                break;
        }
    }
}