import {BlockTypesConstant} from "./block.types.constant";
import FunctionHelper from "../helpers/function.helper";

export const SEND_A_MESSAGE = {
    id: '',
    name: '',
    autoGenerateID: FunctionHelper.getUUID4(),
    connect: '',
    questions: null,
    config: {},
    blocks: [],
}

export const TYPE_MESSAGE_TEXT = () => ({
    ...SEND_A_MESSAGE,
    slug: BlockTypesConstant.TYPE_MESSAGE_TEXT
})

export const TYPE_WELCOME = () => ({
    ...SEND_A_MESSAGE,
    slug: BlockTypesConstant.TYPE_WELCOME,
    config: {
        alignment: 0,
        searchableOptions: false,
        privacy: {
            link: null,
            pretext: null,
            text: null,
        },
    },
})


export const TYPE_TEXT_SUB_ITEM = (language: string) => ({
    slug: BlockTypesConstant.TYPE_TEXT_SUB_ITEM,
    id: '',
    name: '',
    autoGenerateID: FunctionHelper.getUUID4(),
    connect: '',
    questions: [
        {
            key: language,
            values: [],
        },
    ],
    config: {},
    blocks: [],
})

export const FLOW_CONTAINER = () => ({
    slug: 'TYPE_FLOW_CONTAINER',
    autoGenerateID: FunctionHelper.getUUID4(),
    id: '',
    questions: null,
    blocks: [],
    canvas: {
        position: {x: 250, y: 110},
    },
});