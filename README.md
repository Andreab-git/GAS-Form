# GAS-Form - Google App Script Form

### Drive
<div align="center">
<img
href="https://developers.google.com/apps-script/reference/drive?hl=en"
src="https://www.gstatic.com/images/branding/product/2x/drive_96dp.png"
width="96px"/>
<br>
</div>

### Gmail
<img
href="https://developers.google.com/apps-script/reference/gmail"
src="https://www.gstatic.com/images/branding/product/2x/gmail_96dp.png"
align="center"
width="96px"/>

### Sheets
<img
href="https://developers.google.com/apps-script/reference/spreadsheet?hl=en"
src="https://www.gstatic.com/images/branding/product/2x/sheets_96dp.png"
align="center"
width="96px"/>

Are you looking for a way to create a form that allows you to upload files to your drive? <br>
Would you like your files to be organised to your liking? <br>
Would you like anyone, even anonymous people, to be able to fill in your form? <br>

If that's what you're looking for then this project is for you!

## What do you need?

You need to have a <i>**Google account**</i> and _**create a new Google App Script**_ project in your drive. <br>
You need to create a new folder where the files uploaded by users will be stored and you also need to create a SpreadSheet.

## How it works?

After deploying the project you can access the form using the url.<br>
In the form you can fill in some fields such as first name, last name, email and upload a file. <br> 
After filling in all the fields you can submit the form which, after obtaining confirmation from the Google server that the form has been successfully uploaded, will redirect you to the Greetings page. <br>
Behind the scenes the results of the form will be saved in a SpreadSheet while the uploaded file will be saved in a folder within the drive.<br>
The files will be organised within it according to the year and the email address. <br>
Once the data has been saved, an email will be sent to confirm receipt of the form. 

## What knowledge do I need to be able to edit the form?

No special knowledge is needed. Mainly you need to know HTML, CSS, JavaScript. <br>
Listed below are sites that may be useful for you to modify the design to your liking:

* https://www.w3schools.com/html/
* https://www.w3schools.com/css/
* https://www.w3schools.com/js/
* https://developers.google.com/apps-script

## Getting started

Before deploying, you must enter the values for these variables in **Code.gs**.

Values | Descriptions
------------ | -------------
URL_SCRIPT | Represents the url that is assigned by Google after deployment.
LOGO_MAIN_PAGE | Your main logo ID stored in your Drive
LOGO_GREETINGS_PAGE | This is the logo ID stored in your Drive that appears when the form is submitted successfully
URL_PERSONAL_PAGE | If you have a personal page, fill in the value with your URL
SHEET_URL | This is the URL of the SpreadSheet which is located in your Drive and will collect the results of the form. 
DRIVE_FOLDER_ID | This is the folder where the uploaded files will be stored
EVENT_DATE | Enter the date of the event you are organising

Create a new folder in your Drive where the uploaded file will be stored. <br>
Create a new SpreadSheet file like the [SpreadSheet](SpreadSheet.xlsx) file uploaded to my repository.
