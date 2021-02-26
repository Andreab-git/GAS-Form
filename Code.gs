var URL_SCRIPT = 'https://script.google.com/macros/s/AKfycbzV7hk6xrY1TiNijCElw8lyH9GOPREa-y0OC888jwv-OXgbQqnZLmvi7A/exec'
var LOGO_CAREER_DAY = '1rvYRBvGQ_nud_FM7vuAzvvtmxlIYm1z3'; // Example https://drive.google.com/file/d/1rvYRBvGQ_nud_FM7vuAzvvtmxlIYm1z3/view?usp=sharing
var LOGO_UNIFE = '1kUCTeNl5MWe7IvG0FI98dr5tYpH3B39r' // Example: https://drive.google.com/file/d/1kUCTeNl5MWe7IvG0FI98dr5tYpH3B39r/view?usp=sharing
var LINK_CAREER_DAY = 'http://www.unife.it/it/career-day';
var SHEET_URL = 'https://docs.google.com/spreadsheets/d/1ArpTFIuNtoqLgoMu1IrUugU2HxjZLHRYM98dLoEt7Vg/edit#gid=876456938';
var DRIVE_FOLDER_ID = '1pc495UiA5Kjs5i9_nITGzmcvHUewGWij';  // Folder ID example: https://drive.google.com/drive/folders/1pc495UiA5Kjs5i9_nITGzmcvHUewGWij
var SHEET_DEFAULT_TEMPLATE = 'DO_NOT_DELETE';
var SHEET_TAB = new Date().getFullYear().toString();
var EVENT_DATE = '18-19 maggio' + ' ' + SHEET_TAB;

function doGet(e) {

  if (e.parameter.v == "greetings")
    return loadGreetings(e);
  else if(e.parameter.v == "template")
    return loadTemplateFormPage();

  return loadForm();
}


function doPost(e){

  if(e.parameter.goTo == "greetings")
    return loadGreetings(e);

  if(typeof e !== 'undefined')
    return ContentService.createTextOutput(JSON.stringify(e.parameter));
}


function loadForm() {

  var spreadsheet = SpreadsheetApp.openByUrl(SHEET_URL);
  var ws = spreadsheet.getSheetByName(SHEET_TAB);
  var tmp = HtmlService.createTemplateFromFile('Form-page');
  tmp.logo = LOGO_CAREER_DAY;
  tmp.urlScript = URL_SCRIPT;
  tmp.linkCareerDay = LINK_CAREER_DAY;
  tmp.dataEvento = EVENT_DATE;
  tmp.annoEvento = SHEET_TAB;

  tmp.exists = false;

  if (ws) {
  var list = ws.getRange(1,2,ws.getLastRow()).getValues();
  tmp.list = list.map(function(r) {return r[0]; });
  tmp.exists = true;
  }

  return tmp.evaluate();
}

function loadGreetings(e) {

  let tmp = HtmlService.createTemplateFromFile('Greetings');
  tmp.name = e.parameter.nomeRef;
  tmp.email = e.parameter.email;
  tmp.logo_unife = LOGO_UNIFE;
  tmp.annoEvento = SHEET_TAB;

  return tmp.evaluate();
}

function loadTemplateFormPage() {
  let tmp = HtmlService.createTemplateFromFile('Template-Form-page');
  tmp.logo = LOGO_CAREER_DAY;
  tmp.urlScript = URL_SCRIPT;
  tmp.linkCareerDay = LINK_CAREER_DAY;
  tmp.dataEvento = EVENT_DATE;
  tmp.annoEvento = SHEET_TAB;

  tmp.nomeRef = "a";
  tmp.cognomeRef = "b";
  tmp.email = "c";
  tmp.nome = "d";
  tmp.chiSiamo = "e";
  tmp.cosaFacciamo = "f";
  tmp.percheLavorareConNoi = "g";
  tmp.posizioniAperte = "h";
  tmp.personaCheFaPerNoi = "i";
  tmp.hardSkills = "l";
  tmp.softSkills = "m";
  tmp.linkedin = "n";
  tmp.facebook = "o";
  tmp.instagram = "p";
  tmp.twitter = "q";
  tmp.youtube = "r";
  tmp.telegram = "s";
  tmp.videoAzienda = "t";
  tmp.altro = "u";
  tmp.nomeFile = "v";

  return tmp.evaluate();
}








