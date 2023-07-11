# Health Report Form

This project is a web application that allows users to submit their health reports by filling out a form. The submitted data is stored in a MySQL database, and the health report files are uploaded and saved on the server.
The user can also get their health report by clicking on a link (userdata.html) given on the original form page (index.html). Additionally, there are PHP scripts provided for inserting user details and the PDF file into a MySQL database, as well as fetching the user's health report based on their email ID.
## Features

- User-friendly form for submitting health reports
- Validation checks for required fields and file type (PDF)
- Storage of submitted data in a MySQL database
- File upload functionality for health report files
- Display of submitted user data with file path for reference.

## Technologies Used

- HTML, CSS, JavaScript for the frontend
- PHP for server-side processing and database connectivity
- MySQL database for storing user data
- XAMPP (Apache, MySQL) for local development environment

## Setup

1. Clone the repository or download the project files.
2. Install XAMPP and ensure that Apache and MySQL services are running.
3. Import the provided SQL file to create the necessary database and table.
4. Place the project files in the appropriate directory of your local server (e.g., `htdocs` in XAMPP).
5. Access the application through the web browser using the appropriate URL (e.g., `http://localhost/health-report-form/index.html`).

## Usage

1. Open the application in your web browser.
2. Fill out the health report form with the required information.
3. Upload a health report file (PDF format).
4. Click the "Submit" button to submit the form.
5. The submitted data will be stored in the database, and a success message will be displayed.
6. You can view the submitted user data and download the corresponding health report by entering the name and email in the "Get Your Report" form which can be accessed through a link on the form page.

