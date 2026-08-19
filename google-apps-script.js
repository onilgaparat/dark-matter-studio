// ============================================================
// DARK MATTER STUDIO — Contact Form Email Handler
// Paste this into script.google.com (instructions in chat)
// ============================================================

function doPost(e) {
  try {
    // Accept either JSON or form-encoded data
    let data;
    if (e.postData && e.postData.type === 'application/json') {
      data = JSON.parse(e.postData.contents);
    } else {
      data = e.parameter;
    }

    const subject = 'New inquiry — Dark Matter Studio';
    const body =
      'Name: '    + (data.name    || '(not provided)') + '\n' +
      'Email: '   + (data.email   || '(not provided)') + '\n' +
      'Service: ' + (data.service || '(not provided)') + '\n\n' +
      'Message:\n' + (data.message || '(no message)');

    MailApp.sendEmail({
      to: 'tarapaglino@gmail.com',
      replyTo: data.email || 'tarapaglino@gmail.com',
      subject: subject,
      body: body
    });

    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: err.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Optional: handle preflight / GET pings
function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ status: 'ok' }))
    .setMimeType(ContentService.MimeType.JSON);
}
