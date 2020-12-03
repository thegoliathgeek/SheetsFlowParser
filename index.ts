import GoogleSheetService from "./src/services/google.sheet.service";
import * as dotenv from 'dotenv';
dotenv.config();

const sheets = new GoogleSheetService();

sheets.readData({
    sheetName: 'README_Import_Template_Builder_',
    sheetID: '1r3QRHMhmIuePhWOu8LZ7djkjnWhyqlNqA6vrbL-cAFw'
});