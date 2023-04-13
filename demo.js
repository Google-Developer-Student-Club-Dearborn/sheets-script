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
                    values: ['John', 'Doe', 42]
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
    //         resource: {
    //             requests: [
    //                 {
    //                     updateCells: {
    //                         range: {
    //                           sheetId: sheetId, // The ID of the sheet containing the cell to format
    //                           startRowIndex: 0, // The row index of the cell to format
    //                         //   endRowIndex: -1, // The end row index of the cell to format
    //                           startColumnIndex: 0, // The column index of the cell to format
    //                         //   endColumnIndex: -1 // The end column index of the cell to format
    //                         },
    //                         filterCriteria: {
    //                             condition: {
    //                                 type: "TEXT_EQ",
    //                                 values: [{ userEnteredValue: "John" }]
    //                             }
    //                         },
    //                     },
    //                     rows: [
    //                         {
    //                             values: [
    //                                 {
    //                                     userEnteredFormat: {
    //                                         // Specify the formatting options here
    //                                         backgroundColor: { red: 0.8, green: 0.8, blue: 0.8 },
    //                                         horizontalAlignment: 'CENTER',
    //                                         textFormat: { fontSize: 12, bold: true }
    //                                     }
    //                                 }
    //                             ]
    //                         }
    //                     ],
    //                     fields: 'userEnteredFormat' // Only update the formatting
    //                 }
    //             ]
    //         }
    //     }).data
    //     console.log('Row format rule applied');
    // } catch (err) {
    //     if (err) return console.log(`The API returned an error: ${err}`);
    // }
}
main()
