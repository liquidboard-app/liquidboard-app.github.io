# LiquidBoard Contact endpoint

1. Create a Google Spreadsheet and a Drive folder for contact attachments.
2. Create an Apps Script project, paste in `ContactForm.gs`, then set Script Properties:
   `SPREADSHEET_ID`, `DRIVE_FOLDER_ID`, `OWNER_EMAIL`, and optionally `SHEET_NAME`.
3. Deploy it as a **Web app** that executes as you and can be accessed by anyone.
4. Put the deployment URL in the website environment:

```bash
VITE_CONTACT_ENDPOINT=https://script.google.com/macros/s/AKfycbxLiquidBoardContactPlaceholder/exec
```

The endpoint writes the email, problem and Drive media links to the spreadsheet.
Its email notification intentionally includes only the user's email and problem.
Replace the placeholder URL with the deployed Web App URL when it is available.
