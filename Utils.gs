function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}

function isEmptyText(arrayValues) {

  for (var field in arrayValues) {
    if (arrayValues[field] === "")
    arrayValues[field] = "- Field not inserted.";
  }

  return arrayValues;
}

function createBlobToSend(arrayValues) {
  let tmp = HtmlService.createTemplateFromFile('Template-Form-page');
  tmp.logo = LOGO_PERSONAL_PAGE;
  tmp.urlScript = URL_SCRIPT;
  tmp.linkPersonalPage = URL_PERSONAL_PAGE;
  tmp.dataEvento = EVENT_DATE;

  arrayValues = isEmptyText(arrayValues);

  tmp.fName =   arrayValues.fName;
  tmp.lName = arrayValues.lName;
  tmp.email = arrayValues.email;
  tmp.fileName = arrayValues.fileName;
  tmp.eventYear = SHEET_TAB;

  var blob = tmp.evaluate().getBlob();

  sendEmailToMultiple(arrayValues.email, blob);

  return tmp.evaluate();
}


function sendEmailToMultiple(sendTo, blob) {

  var message = 'Please ignore this email if you are not the recipient.';
  var mailObject = 'Form results of YOUR_EVENT_NAME' + SHEET_TAB;
  var recipientsTO = sendTo;
  var recipientsCC = "foo@gmail.com";

  var ImageBlob = DriveApp
                      .getFileById(LOGO_PERSONAL_PAGE)
                      .getBlob()
                      .setName("Logo PersonalPage" + " " + SHEET_TAB);

  GmailApp.sendEmail(recipientsTO, mailObject, message, {
    htmlBody: blob.getDataAsString(),
    inlineImages: {image: ImageBlob},
    name: 'YOUR EVENT NAME' + ' ' + SHEET_TAB,
    cc: recipientsCC
 });

}