const { google } = require('googleapis');
const credentials = require('./credentials.json'); // service account 
const spreadsheetId = '18GRXGVHwiPrHsUNzTecIHC8KyYFe2wLkqVlDkuwxVbc';
const sheetId = 25612473 //taken from url after checking gid path param

// Authorize and initialize the API client
const auth = new google.auth.GoogleAuth({
    credentials: credentials,
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});
const sheets = google.sheets({ version: 'v4', auth });


async function main() {

    // Append the row data to the sheet
    try {
        const res = await sheets.spreadsheets.values.append({
            spreadsheetId: spreadsheetId,
            range: 'Sheet1',
            valueInputOption: 'USER_ENTERED',
            resource: {
                values: {
                    values: ['Ali', 'Elzein', 300]
                }
            },
        }).data
        console.log(`Rows added`);

    } catch (err) {
        if (err) return console.log(`The API returned an error: ${err}`);
    }

    // Apply the row format rule to the sheet
    // try {
    //     const res = await sheets.spreadsheets.batchUpdate({
    //         spreadsheetId: spreadsheetId,
    //         requests: [
    //             {
    //                 "rows": [
    //                     {
    //                         values: [
    //                             {
    //                                 userEnteredFormat: {
    //                                     backgroundColor: {
    //                                         red: 0.8,
    //                                         green: 0.8,
    //                                         blue: 0.8,
    //                                         alpha: 1
    //                                     }
    //                                 }
    //                             }
    //                         ]
    //                     }
    //                 ],
    //                 "fields": "*",
    //                 // Union field area can be only one of the following:
    //                 "start": {
    //                     "sheetId": sheetId,
    //                     "rowIndex": 0,
    //                     "columnIndex": 0
    //                 },
    //                 "range": {
    //                     "sheetId": sheetId,
    //                     "startRowIndex": 0,
    //                     "endRowIndex": 0,
    //                     "startColumnIndex": 1,
    //                     "endColumnIndex": 1
    //                 }
    //             }
    //         ]
    //         // End of list of possible types for union field area.
    //     }).data
    //     console.log('Row format rule applied');
    // } catch (err) {
    //     if (err) return console.log(`The API returned an error: ${err}`);
    // }
}
main()
