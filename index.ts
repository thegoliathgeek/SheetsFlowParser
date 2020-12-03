import GoogleSheetService from "./src/services/google.sheet.service";
import * as dotenv from 'dotenv';
import BlockBuilderService from "./src/services/block.builder.service";
dotenv.config();

const sheets = new GoogleSheetService();

const build = async ()=>{
    // const data = await sheets.readData({
    //     sheetName: 'README_Import_Template_Builder_',
    //     sheetID: '1r3QRHMhmIuePhWOu8LZ7djkjnWhyqlNqA6vrbL-cAFw'
    // })
    BlockBuilderService.buildBlocks( [
        [],
        [
            "Add new or use existing Interactions in the Interaction (Column D) and Next Interaction (Column J) ",
            "Trigger Interaction based on these flags",
            "Specify Utterance to jump to specific interaction or block"
        ],
        [
            "List Interactions",
            "Flags",
            "Utterance",
            "Interaction",
            "Message Type",
            "Bot Message",
            "Options",
            "User Message",
            "Variable",
            "Next Interaction"
        ],
        [
            "Lead Generation",
            "WELCOME",
            "Ciao, Hello",
            "Welcome",
            "",
            "",
            "",
            "",
            "",
            "Product Search"
        ],
        [
            "Welcome",
            "",
            "",
            "",
            "Send A Message - Text",
            "{welcome}"
        ],
        [
            "Idle Time",
            "",
            "",
            "",
            "Send A Message - Text",
            "Ventis ti premia con prezzi speciali e sconti"
        ],
        [
            "Fallback",
            "",
            "",
            "",
            "Send A Message - Text",
            "Lo sai che oggi puoi approfittare di Voucher code Scarpato LP"
        ],
        [
            "Product Search",
            "",
            "",
            "",
            "Send A Message - Text",
            "Come posso aiutarti a usare la promo?"
        ],
        [
            "Add to Cart",
            "",
            "",
            "",
            "Send A Message - Text",
            "Digita nome prodotto o categoria, come scarpe, o brand"
        ],
        [
            "WhatsApp",
            "",
            "",
            "",
            "",
            "",
            "",
            "Letto",
            "productSearch"
        ],
        [
            "Existing User",
            "FALLBACK",
            "",
            "Product Search"
        ],
        [
            "Privacy Policy",
            "",
            "",
            "",
            "Super-Powers - Webhooks"
        ],
        [
            "Good Bye",
            "",
            "",
            "",
            "Send A Message - Carousel"
        ],
        [
            "",
            "",
            "",
            "",
            "",
            "",
            "Acuista ora"
        ],
        [
            "",
            "",
            "",
            "",
            "",
            "",
            "Aggiungi Alla Tua Lista"
        ],
        [
            "",
            "",
            "",
            "",
            "",
            "",
            "Avvisami Quanda Prezzo Scende",
            "",
            "",
            "Add to Cart"
        ],
        [
            "",
            "IDLE",
            "",
            "Idle Time"
        ],
        [
            "",
            "",
            "",
            "",
            "Send A Message - Text",
            "Non c'è nulla che ti convince?"
        ],
        [
            "",
            "",
            "",
            "",
            "Send A Message - Text",
            "Posso farti vedere altre novità"
        ],
        [
            "",
            "",
            "",
            "",
            "Send A Message - Text",
            "Dimmi tu"
        ],
        [
            "",
            "",
            "",
            "Add to Cart"
        ],
        [
            "",
            "",
            "",
            "",
            "Send A Message - Text",
            "Ti mando un WhatsApp appena il prezzo scende\n"
        ],
        [
            "",
            "",
            "",
            "",
            "Ask A Question - Number",
            "Mi lasci il tuo numero?\n",
            "",
            "",
            "user.number"
        ],
        [
            "",
            "",
            "",
            "",
            "Send A Message - Text",
            "Nessuno lo userà per richiamarti.\n"
        ],
        [
            "",
            "",
            "",
            "",
            "Ask A Question - Buttons",
            "Ci stai autorizzando a ricontattarti per questi articoli"
        ],
        [
            "",
            "",
            "",
            "",
            "",
            "",
            "Ok, grazie"
        ],
        [
            "",
            "",
            "",
            "",
            "",
            "",
            "Privacy Policy",
            "",
            "",
            "Privacy Policy"
        ],
        [
            "",
            "",
            "",
            "Privacy Policy"
        ],
        [
            "",
            "",
            "",
            "",
            "Send A Message - Text",
            "Termini del Servizio"
        ],
        [
            "",
            "",
            "",
            "",
            "Send A Message - URL",
            "https://www.ventis.it/cms/area-legale"
        ],
        [
            "",
            "",
            "",
            "",
            "Send A Message - Text",
            "Privacy Policy"
        ],
        [
            "",
            "",
            "",
            "",
            "Send A Message - URL",
            "https://www.ventis.it/cms/area-legale#privacy"
        ],
        [
            "",
            "",
            "",
            "",
            "Send A Message - Text",
            "Condizioni del servizio\n"
        ],
        [
            "",
            "",
            "",
            "",
            "Send A Message - URL",
            "https://www.ventis.it/cms/servizio-clienti"
        ],
        [
            "",
            "",
            "",
            "",
            "Ask A Question - Buttons",
            "Registrandoti tramite email, Facebook o Google, accetti i termini, le condizioni e la Privacy Policy.\n\nL’accettazione è obbligatoria per erogare il servizio"
        ],
        [
            "",
            "",
            "",
            "",
            "",
            "",
            "Accetto"
        ],
        [
            "",
            "",
            "",
            "",
            "",
            "",
            "Non accetto"
        ],
        [
            "",
            "",
            "",
            "",
            "Ask A Question - Name",
            "Come ti chiami?",
            "",
            "",
            "",
            "Good Bye"
        ],
        [
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "Mithun"
        ],
        [
            "",
            "GOOD BYE",
            "",
            "Good Bye",
            "Send A Message - Text",
            "Fatto! 🎉"
        ],
        [
            "",
            "",
            "",
            "",
            "Send A Message - Text",
            "Ti scrivo su WhatsApp appena il prezzo scende\n"
        ],
        [
            "",
            "",
            "",
            "",
            "Send A Message - Text",
            "Mi ha fatto piacere parlare con te"
        ],
        [
            "",
            "",
            "",
            "",
            "Send A Message - Text",
            "Ti aspetto presto qui su Ventis"
        ]
    ]);
}

build()