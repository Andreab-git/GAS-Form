//Create folder if does not exists only
function createFolder(folderID, folderName){
  var parentFolder = DriveApp.getFolderById(folderID);
  var subFolders = parentFolder.getFolders();
  var doesntExists = true;
  var newFolder = '';

  // Check if folder already exists.
  while(subFolders.hasNext()){
    var folder = subFolders.next();

    //If the name exists return the id of the folder
    if(folder.getName() === folderName){
      Logger.log("The folder " + folderName + " already exists");
      doesntExists = false;
      newFolder = folder;
      return newFolder.getId();
    };
  };
  //If the name doesn't exists, then create a new folder
  if(doesntExists == true){
    Logger.log("The folder " + folderName + " doesn't exists");
    //If the file doesn't exists
    newFolder = parentFolder.createFolder(folderName);
    Logger.log("Folder " + folderName + " created successfully!");
    return newFolder.getId();
  };
};


function saveFile(obj, folderName) {
  var blob = Utilities.newBlob(Utilities.base64Decode(obj.data), obj.mimeType, obj.fileName);
  var folderID = createFolder(DRIVE_FOLDER_ID, SHEET_TAB);
  Logger.log("Folder ID: " + folderID + " successfully created!");

  var guestFolderID = DriveApp.getFolderById(folderID).createFolder(folderName).getId();
  Logger.log("Guest folder ID: " + folderID + " successfully created!");

  var file = DriveApp.getFolderById(guestFolderID).createFile(blob);
  Logger.log( obj.fileName + " successfully created in " + file.getId());

  return file.getId();
}

function userClicked(arrayValues, savedFileID) {
  var spreadsheet = SpreadsheetApp.openByUrl(SHEET_URL);
  var sheet = spreadsheet.getSheetByName(SHEET_TAB);
  let savedFile = DriveApp.getFileById(savedFileID);
  let savedFileURL = savedFile.getUrl();
  let savedFileName = savedFile.getName();
  let cell;
  let cellFormula;

  if (!sheet) {
    Logger.log("SheetByName " + SHEET_TAB +" not find");
    var defaultTemplate = spreadsheet.getSheetByName(SHEET_DEFAULT_TEMPLATE);
    defaultTemplate.copyTo(spreadsheet).setName(SHEET_TAB);
    Logger.log("Template copy of " + SHEET_TAB + " created successfully");
    sheet = spreadsheet.getSheetByName(SHEET_TAB);
  }

  sheet.appendRow([new Date(),arrayValues.email, arrayValues.fName, arrayValues.lName]);

  Logger.log("appendRow successfully executed!");

  cell = sheet.getRange(sheet.getLastRow(), 5);
  cellFormula = 'hyperlink("' + savedFileURL + '";"' + savedFileName + '")';
  cell.setFormula(cellFormula);

  createBlobToSend(arrayValues);
}