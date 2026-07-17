/**
 * LiquidBoard contact form endpoint.
 *
 * Deploy this file as a Google Apps Script Web App. Set these Script Properties:
 *   SPREADSHEET_ID  — destination spreadsheet ID
 *   DRIVE_FOLDER_ID — destination Drive folder ID for attachments
 *   OWNER_EMAIL     — address that receives the notification email
 * Optional: SHEET_NAME (defaults to "Contact")
 */

var MAX_IMAGE_FILE_BYTES = 5 * 1024 * 1024;
var MAX_VIDEO_FILE_BYTES = 50 * 1024 * 1024;
var MAX_TOTAL_MEDIA_BYTES = 50 * 1024 * 1024;

function doGet() {
  return response_({ ok: true, service: 'LiquidBoard contact endpoint' });
}

function doPost(event) {
  try {
    const payload = JSON.parse(event.postData.contents || '{}');
    const email = String(payload.email || '').trim();
    const problem = String(payload.problem || '').trim();
    const media = Array.isArray(payload.media) ? payload.media : [];

    if (!email || !/^\S+@\S+\.\S+$/.test(email)) throw new Error('A valid email is required.');
    if (!problem) throw new Error('A problem description is required.');
    if (media.length > 5) throw new Error('A maximum of 5 media files is allowed.');

    const properties = PropertiesService.getScriptProperties();
    const spreadsheetId = requiredProperty_(properties, 'SPREADSHEET_ID');
    const driveFolderId = requiredProperty_(properties, 'DRIVE_FOLDER_ID');
    const ownerEmail = requiredProperty_(properties, 'OWNER_EMAIL');
    const sheetName = properties.getProperty('SHEET_NAME') || 'Contact';

    const folder = DriveApp.getFolderById(driveFolderId);
    var totalMediaBytes = 0;
    const mediaUrls = media.map(function (item) {
      if (!item || !/^image\//.test(item.type || '') && !/^video\//.test(item.type || '')) {
        throw new Error('Only image and video uploads are allowed.');
      }
      const name = safeFileName_(item.name || 'attachment');
      const bytes = Utilities.base64Decode(item.base64 || '');
      if (!bytes.length) throw new Error('An attachment could not be read.');
      const sizeLimit = /^video\//.test(item.type || '') ? MAX_VIDEO_FILE_BYTES : MAX_IMAGE_FILE_BYTES;
      if (bytes.length > sizeLimit) {
        throw new Error(/^video\//.test(item.type || '')
          ? 'Each video attachment must be 50 MB or less.'
          : 'Each image attachment must be 5 MB or less.');
      }
      totalMediaBytes += bytes.length;
      if (totalMediaBytes > MAX_TOTAL_MEDIA_BYTES) {
        throw new Error('All attachments together must be 50 MB or less.');
      }
      const file = folder.createFile(Utilities.newBlob(bytes, item.type, name));
      return file.getUrl();
    });

    const spreadsheet = SpreadsheetApp.openById(spreadsheetId);
    const sheet = spreadsheet.getSheetByName(sheetName) || spreadsheet.insertSheet(sheetName);
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(['Created at', 'User email', 'Problem', 'Media links']);
      sheet.setFrozenRows(1);
    }
    sheet.appendRow([new Date(), email, problem, mediaUrls.join('\n')]);

    MailApp.sendEmail({
      to: ownerEmail,
      subject: '[LiquidBoard] New contact request',
      htmlBody: '<p><strong>User email:</strong> ' + escapeHtml_(email) + '</p>'
        + '<p><strong>Problem:</strong></p><p>' + escapeHtml_(problem).replace(/\n/g, '<br>') + '</p>',
    });

    return response_({ ok: true });
  } catch (error) {
    return response_({ ok: false, error: error instanceof Error ? error.message : String(error) });
  }
}

function requiredProperty_(properties, key) {
  const value = properties.getProperty(key);
  if (!value) throw new Error('Missing Script Property: ' + key);
  return value;
}

function safeFileName_(value) {
  return String(value).replace(/[\\/:*?"<>|]/g, '_').slice(0, 180);
}

function escapeHtml_(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function response_(payload) {
  return ContentService
    .createTextOutput(JSON.stringify(payload))
    .setMimeType(ContentService.MimeType.JSON);
}
