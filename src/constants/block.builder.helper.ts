import {
    TYPE_CAROUSEL,
    TYPE_MESSAGE_TEXT,
    TYPE_MESSAGE_URL,
    TYPE_NUMBER,
    TYPE_TEXT_SUB_ITEM,
    TYPE_WEBHOOKS
} from "./block.schema.constant";
import {IndexDefinitionConstant} from "./index.definition.constant";
import FileHelper from "../helpers/file.helper";

export default class BlockBuilderHelper {
    static identifySendAMessageTypeAndBuild(messageType: string, tempHolder: any, data: any[], language: string = 'it') {
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
            case 'URL':
                tempHolder.blocks.push({
                    ...TYPE_MESSAGE_URL(),
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
            case 'Webhooks':
                tempHolder.blocks.push({
                    ...TYPE_WEBHOOKS()
                });
                break;

            case 'Carousel':
                tempHolder.blocks.push({
                    ...TYPE_CAROUSEL()
                });
                break;

            case 'Number':
                tempHolder.blocks.push({
                    ...TYPE_NUMBER()
                });
                break;
            default:
                FileHelper.writeToLogFile('block.builder.helper.ts , No block type found');
                break;

        }
    }

    static identifyAskAQuestionTypeAndBuild(messageType: string, tempHolder: any, data: any[], language: string = 'it') {
        switch (messageType) {
            case 'URL':
                break;
            default:
                FileHelper.writeToLogFile('block.builder.helper.ts , No block type found');
                break;

        }
    }

    static identifySuperPowersTypeAndBuild(messageType: string, tempHolder: any, data: any[], language: string = 'it') {
        switch (messageType) {
            case 'Webhooks':
                tempHolder.blocks.push({
                    ...TYPE_WEBHOOKS()
                });
                break;
            default:
                FileHelper.writeToLogFile('block.builder.helper.ts , No block type found');
                break;

        }
    }
}