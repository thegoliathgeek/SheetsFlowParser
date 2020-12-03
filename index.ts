import GoogleSheetService from "./src/services/google.sheet.service";
import * as dotenv from 'dotenv';
dotenv.config();

const sheets = new GoogleSheetService();

sheets.readData({
    sheetName: '[Halo]_Import_Template_Builder.MH.30112020',
    sheetID: '1oFzpaHhjP4J0PgFaeMZmk3gl_x9L-tCaa_jOUO6yxO8'
});