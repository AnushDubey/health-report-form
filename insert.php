<?php
// A simple php-mysql code to insert user details and pdf file into the database. 

error_reporting(E_ALL);
ini_set('display_errors', 1);

// Connecting with the database
$conn = mysqli_connect("localhost", "root", "", "health_report_db");

// Checking if connection was successful
if (!$conn) {
  die("Connection failed: " . mysqli_connect_error());
}

// Fetching form data
$name = $_POST['name'];
$age = $_POST['age'];
$weight = $_POST['weight'];
$email = $_POST['email'];

// Uploading the health report file
$targetDir = "uploads/";
$healthReportName = basename($_FILES["healthReport"]["name"]);
$targetFilePath = $targetDir . $healthReportName;
$fileType = strtolower(pathinfo($targetFilePath, PATHINFO_EXTENSION));
echo $fileType;
// Check if the uploaded file is a PDF file
if ($fileType !== 'pdf') {
  die("Error: Only PDF files are allowed.");
}
if (move_uploaded_file($_FILES["healthReport"]["tmp_name"], $targetFilePath)) {
  echo "File uploaded successfully\n";
} else {
  echo "Error uploading file\n";
}

// Inserting user details and file path into the database
$sql = "INSERT INTO health_report (name, age, weight, email, health_report_path) VALUES ('$name', $age, $weight, '$email', '$targetFilePath')";
if (mysqli_query($conn, $sql)) {
  echo "Record inserted successfully\n";

  // Displaying a success message
  echo "<p>Form submitted successfully!</p>";
} else {
  echo "Error: " . $sql . "<br>" . mysqli_error($conn) . "\n";
}

// Closing database connection
mysqli_close($conn);
?>
