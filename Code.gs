var URL_SCRIPT = 'https://script.google.com/macros/s/<YOUR SCRIPT ID>/exec'
var LOGO_MAIN_PAGE = '<YOUR LOGO ID STORED IN YOUR DRIVE>'; // Example https://drive.google.com/file/d/1rTYsBvGQZnud_FM7vuAzPvtmxjIYm1z1/view?usp=sharing
var LOGO_GREETINGS_PAGE = '<YOUR LOGO ID STORED IN YOUR DRIVE>' // Example: https://drive.google.com/file/d/1rTYsBvGQZnud_FM7vuAzPvtmxjIYm1z1/view?usp=sharing
var URL_PERSONAL_PAGE = 'http://www.facebook.com/your_name';
var SHEET_URL = '<YOUR SPREADSHEET URL>';
var DRIVE_FOLDER_ID = '<THE ID OF YOUR FOLDER ON THE DRIVE WHERE THE UPLOADED FILES WILL BE SAVED>';
var SHEET_DEFAULT_TEMPLATE = 'DO_NOT_DELETE';
var SHEET_TAB = new Date().getFullYear().toString();  //SHEET_TAB represents the actual year (data are stored by year).
var EVENT_DATE = '10-11 May' + ' ' + SHEET_TAB;

function doGet(e) {

  if (e.parameter.v == "greetings")
    return loadGreetings(e);
  else if(e.parameter.v == "template")
    return loadTemplateFormPage();

  return loadForm();
}


function doPost(e) {

  if(e.parameter.goTo == "greetings")
    return loadGreetings(e);

  if(typeof e !== 'undefined')
    return ContentService.createTextOutput(JSON.stringify(e.parameter));
}


function loadForm() {

  var tmp = HtmlService.createTemplateFromFile('Form-page');
  tmp.logo = LOGO_MAIN_PAGE;
  tmp.urlScript = URL_SCRIPT;
  tmp.linkPersonalPage = URL_PERSONAL_PAGE;
  tmp.eventDate = EVENT_DATE;
  tmp.eventYear = SHEET_TAB;

  return tmp.evaluate();
}

function loadGreetings(e) {

  let tmp = HtmlService.createTemplateFromFile('Greetings');
  tmp.name = e.parameter.fName;
  tmp.email = e.parameter.email;
  tmp.LOGO_GREETINGS_PAGE = LOGO_GREETINGS_PAGE;
  tmp.eventYear = SHEET_TAB;

  return tmp.evaluate();
}

function loadTemplateFormPage() {

  let tmp = HtmlService.createTemplateFromFile('Template-Form-page');
  tmp.logo = LOGO_MAIN_PAGE;
  tmp.urlScript = URL_SCRIPT;
  tmp.linkPersonalPage = URL_PERSONAL_PAGE;
  tmp.eventDate = EVENT_DATE;
  tmp.eventYear = SHEET_TAB;

  tmp.fName = "fName";
  tmp.lName = "lName";
  tmp.email = "email";
  tmp.fileName = "fileName";

  return tmp.evaluate();
}








