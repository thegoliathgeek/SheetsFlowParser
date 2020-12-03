import {google} from 'googleapis';
import FileHelper from "../helpers/file.helper";

export default class GoogleSheetService {
    private readonly sheetsClient: any;

    constructor() {
        this.sheetsClient = new google.auth.OAuth2({
            clientSecret: process.env.GOOGLE_SHEETS_CLIENT_SECRET,
            clientId: process.env.GOOGLE_SHEETS_CLIENT_ID
        });

        this.sheetsClient.setCredentials({
            refresh_token: process.env.GOOGLE_SHEETS_REFRESH_TOKEN

        });
    }

    async readData(body: { sheetID: string, sheetName: string }) {

        const sheets = google.sheets({version: 'v4', auth: this.sheetsClient});
        const request = {
            spreadsheetId: body.sheetID,
            ranges: ['A:Z'],
            // auth: this.sheetsClient
        }

        try {
            // @ts-ignore
            const response = (await sheets.spreadsheets.values.batchGet(request, {})).data;
            // @ts-ignore
            const rows = response;
            FileHelper.jsonToFile(rows, 'storage', 'some.json');
            return rows;
        } catch (err) {
            throw err;
        }
    }
}