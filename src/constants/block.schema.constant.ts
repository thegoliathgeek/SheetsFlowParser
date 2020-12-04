import {BlockTypesConstant} from "./block.types.constant";
import FunctionHelper from "../helpers/function.helper";

export const SEND_A_MESSAGE = () => ({
    id: '',
    name: '',
    autoGenerateID: FunctionHelper.getUUID4(),
    connect: '',
    questions: null,
    config: {},
    blocks: [],
})

export const TYPE_MESSAGE_TEXT = () => ({
    ...SEND_A_MESSAGE(),
    slug: BlockTypesConstant.TYPE_MESSAGE_TEXT
})
export const TYPE_MESSAGE_FILE = () => ({
    ...SEND_A_MESSAGE(),
    slug: 'TYPE_MESSAGE_FILE',
})
export const TYPE_MESSAGE_URL = () => ({
    ...SEND_A_MESSAGE(),
    slug: 'TYPE_MESSAGE_URL',
})
export const TYPE_MESSAGE_AUDIO = () => ({
    ...SEND_A_MESSAGE(),
    slug: 'TYPE_MESSAGE_AUDIO',
})
export const TYPE_MESSAGE_VIDEO = () => ({
    ...SEND_A_MESSAGE(),
    slug: 'TYPE_MESSAGE_VIDEO',
})
export const TYPE_MESSAGE_IMAGE = () => ({
    ...SEND_A_MESSAGE(),
    slug: 'TYPE_MESSAGE_IMAGE',
})
export const TYPE_WELCOME = () => ({
    ...SEND_A_MESSAGE(),
    slug: 'TYPE_WELCOME',
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
export const TYPE_GOODBYE = () => ({
    ...SEND_A_MESSAGE(),
    slug: 'TYPE_GOODBYE',
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

export const ASK_A_QUESTION = () => ({
    id: '',
    name: '',
    autoGenerateID: FunctionHelper.getUUID4(),
    connect: '',
    questions: null,
    variable: {
        name: '',
        type: '',
    },
    config: {},
    blocks: [],
});

export const TYPE_NAME = () => ({
    ...ASK_A_QUESTION(),
    slug: 'TYPE_NAME',
})
export const TYPE_DATE = () => ({
    ...ASK_A_QUESTION(),
    slug: 'TYPE_DATE',
})
export const TYPE_EMAIL = () => ({
    ...ASK_A_QUESTION(),
    slug: 'TYPE_EMAIL',
})
export const TYPE_NUMBER = () => ({
    ...ASK_A_QUESTION(),
    slug: 'TYPE_NUMBER',
})
export const TYPE_PHONE = () => ({
    ...ASK_A_QUESTION(),
    slug: 'TYPE_PHONE',
})
export const TYPE_TEXT = () => ({
    ...ASK_A_QUESTION(),
    slug: 'TYPE_TEXT',
})
export const TYPE_PASSWORD = () => ({
    ...ASK_A_QUESTION(),
    slug: 'TYPE_PASSWORD',
})
export const TYPE_URL = () => ({
    ...ASK_A_QUESTION(),
    slug: 'TYPE_URL',
})
export const TYPE_ADDRESS = () => ({
    ...ASK_A_QUESTION(),
    slug: 'TYPE_ADDRESS',
})
export const TYPE_IMAGE = () => ({
    ...ASK_A_QUESTION(),
    slug: 'TYPE_IMAGE',
})
export const TYPE_VIDEO = () => ({
    ...ASK_A_QUESTION(),
    slug: 'TYPE_VIDEO',
})
export const TYPE_AUDIO = () => ({
    ...ASK_A_QUESTION(),
    slug: 'TYPE_AUDIO',
})
export const TYPE_FILE = () => ({
    ...ASK_A_QUESTION(),
    slug: 'TYPE_FILE',
})
export const TYPE_CHOICE = () => ({
    ...ASK_A_QUESTION(),
    slug: 'TYPE_CHOICE',
})
export const TYPE_BUTTONS = () => ({
    ...ASK_A_QUESTION(),
    slug: 'TYPE_BUTTONS',
    blocks: [],
})
export const TYPE_YES_NO = () => ({
    ...ASK_A_QUESTION(),
    slug: 'TYPE_YES_NO',
    blocks: [],
})

export const TYPE_API = () => ({
    ...ASK_A_QUESTION(),
    slug: 'TYPE_API',
})
export const TYPE_WEBHOOKS = () => ({
    ...ASK_A_QUESTION(),
    slug: 'TYPE_WEBHOOKS',
    config: {
        method: '',
        url: '',
        headers: {},
        data: {},
    },
})
export const TYPE_SHOW_A_MAP = (language: string) => ({
    ...ASK_A_QUESTION(),
    slug: 'TYPE_SHOW_A_MAP',
    blocks: [
        {
            slug: 'TYPE_TEXT_SUB_ITEM',
            id: '',
            name: '',
            autoGenerateID: '',
            order: 0,
            connect: '',
            questions: [
                {
                    key: language,
                    values: [],
                },
            ],
            config: {},
            blocks: [],
        },
        {
            slug: 'TYPE_TEXT_SUB_ITEM',
            id: '',
            name: '',
            autoGenerateID: '',
            connect: '',
            order: 1,
            questions: [
                {
                    key: language,
                    values: [],
                },
            ],
            config: {},
            blocks: [],
        },
    ],
})

export const TYPE_CARDS = () => ({
    slug: 'TYPE_CARDS',
    id: '',
    name: '',
    autoGenerateID: FunctionHelper.getUUID4(),
    connect: null,
    questions: null,
    config: {
        data: {
            url: '',
            title: '',
            subtitle: '',
        },
    },
    blocks: [],
})
export const TYPE_CONDITIONAL_LOGIC = () => ({
    slug: 'TYPE_IF_ELSE',
    id: '',
    autoGenerateID: FunctionHelper.getUUID4(),
    connect: null,
    questions: null,
    config: {},
    blocks: [
        {
            slug: 'TYPE_IF_ELSE_SUB_ITEM',
            id: '',
            order: 0,
            autoGenerateID: FunctionHelper.getUUID4(),
            connect: null,
            questions: null,
            config: {
                logic: '',
            },
            blocks: [],
        },
    ],
    parentID: null,
})
export const TYPE_CAROUSEL = () => ({
    name: null,
    questions: null,
    variable: null,
    slug: 'TYPE_CAROUSEL',
    id: '',
    autoGenerateID: '',
    connect: '',
    config: {
        targetVariable: '',
        maxItems: 3,
        cardData: {
            url: '',
            subTitle: '',
            title: '',
            urlType: 'IMAGE',
        },
    },
    blocks: [],
})
export const TYPE_SET_VARS = () => ({
    slug: 'TYPE_SET_VARS',
    blocks: [
        {
            id: '',
            autoGenerateID: FunctionHelper.getUUID4(),
            slug: 'TYPE_SET_VAR_SUB_ITEM',
            config: {
                logic: null,
                name: '',
                fromVariable: '',
            },
        },
    ],
    config: {},
    id: '',
    autoGenerateID: FunctionHelper.getUUID4(),
})
export const TYPE_HUMAN_TAKE_OVER = () => ({
    ...SEND_A_MESSAGE(),
    slug: 'TYPE_HUMAN_TAKE_OVER',
    id: '',
    autoGenerateID: FunctionHelper.getUUID4(),
    config: {
        assignation_type: null,
        agent_time: '1', // in Minutes
        agentList: [],
        agent: null,
        pending_chats_notification: null,
        custom_assignation: {
            auto_assign_online_agents: false,
            ask_for_user_email: false,
            ask_for_the_reason_in_get_in_touch: false,
            show_availability_time_when_no_agents_online: false,
            button_to_restart_conversation: false,
            receive_email_notification_for_pending_chats: false,
        },
        messages: [],
    },
    variable: {
        name: null,
        type: null,
    },
    blocks: [
        {
            autoGenerateID: FunctionHelper.getUUID4(),
            order: 0,
            slug: 'TYPE_HUMAN_TAKE_OVER_SUB_ITEM',
            config: {
                assigned: true,
            },
        },
        {
            order: 1,
            autoGenerateID: FunctionHelper.getUUID4(),
            slug: 'TYPE_HUMAN_TAKE_OVER_SUB_ITEM',
            config: {
                assigned: false,
            },
        },
    ],
})
export const TYPE_GO_TO_FLOW = () => ({
    id: '',
    slug: 'TYPE_GO_TO_FLOW',
    autoGenerateID: FunctionHelper.getUUID4(),
    config: {},
    blocks: [],
    parentID: null,
})
export const TYPE_FLOW_CONTAINER = () => ({
    slug: 'TYPE_FLOW_CONTAINER',
    autoGenerateID: FunctionHelper.getUUID4(),
    id: '',
    questions: null,
    blocks: [],
})

const ESB = () => ({
    id: '',
    autoGenerateID: FunctionHelper.getUUID4(),
    config: {
        dynamic: [],
        profile_integration_id: null,
    },
    blocks: [],
    parentID: null,
    variable: {
        name: null,
        type: null,
    },
})
export const TYPE_SAVE_TO_CRM = () => ({
    ...ESB(),
    slug: 'TYPE_SAVE_TO_CRM',
})
export const TYPE_CRM = () => ({
    ...ESB(),
    slug: 'TYPE_CRM',
})
export const TYPE_CALENDARS = () => ({
    ...ESB(),
    slug: 'TYPE_CALENDARS',
})
export const TYPE_ZAPIER = () => ({
    ...ESB(),
    slug: 'TYPE_ZAPIER',
})
export const TYPE_REMINDER_NOTIFICATION = () => ({
    ...ESB(),
    slug: 'TYPE_REMINDER_NOTIFICATION',
})
export const TYPE_ECOMMERCE = () => ({
    ...ESB(),
    slug: 'TYPE_ECOMMERCE',
})
export const TYPE_NEWSLETTER = () => ({
    ...ESB(),
    slug: 'TYPE_NEWSLETTER',
})
export const TYPE_PAYMENTS = () => ({
    ...ESB(),
    slug: 'TYPE_PAYMENTS',
})
export const TYPE_STORAGE = () => ({
    ...ESB(),
    slug: 'TYPE_STORAGE',
})
export const TYPE_LIVE_CHAT = () => ({
    ...ESB(),
    slug: 'TYPE_LIVE_CHAT',
})
export const TYPE_SPREADSHEETS = () => ({
    ...ESB(),
    slug: 'TYPE_SPREADSHEETS',
})
export const TYPE_ANALYTICS = () => ({
    ...ESB(),
    slug: 'TYPE_ANALYTICS',
})

export const TYPE_LAUNCH_CALENDAR_BOOKING = () => ({
    ...ESB(),
    slug: 'TYPE_LAUNCH_CALENDAR_BOOKING',
})
export const TYPE_SHOW_A_PRODUCT_CATALOG = () => ({
    ...ESB(),
    slug: 'TYPE_SHOW_A_PRODUCT_CATALOG',
})
export const TYPE_SEND_A_REMINDER = () => ({
    ...ESB(),
    slug: 'TYPE_SEND_A_REMINDER',
})
export const TYPE_SEARCH_KNOWLEDGE_BASE = () => ({
    ...ESB(),
    slug: 'TYPE_SEARCH_KNOWLEDGE_BASE',
})
export const TYPE_LAUNCH_LIVE_STREAMING = () => ({
    ...ESB(),
    slug: 'TYPE_LAUNCH_LIVE_STREAMING',
})
export const TYPE_SAVE_TO_A_SPREADSHEET = () => ({
    ...ESB(),
    slug: 'TYPE_SAVE_TO_A_SPREADSHEET',
})
export const TYPE_ADD_ANALYTICS = () => ({
    ...ESB(),
    slug: 'TYPE_ADD_ANALYTICS',
})
export const TYPE_TASK_NOTIFICATIONS = () => ({
    ...ESB(),
    slug: 'TYPE_TASK_NOTIFICATIONS',
})

export const TYPE_DUMMY = () => ({
    slug: 'TYPE_DUMMY',
    id: '',
    questions: null,
    autoGenerateID: FunctionHelper.getUUID4(),
    config: {},
})

export const TYPE_INTENT = (language: string) => ({
    slug: 'TYPE_INTENT',
    autoGenerateID: FunctionHelper.getUUID4(),
    id: '',
    questions: null,
    config: {},
})
