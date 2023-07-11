<?php
// Check if form is submitted and data is available
if ($_SERVER["REQUEST_METHOD"] === "GET" && isset($_GET['name']) && isset($_GET['email'])) {
  // Fetching submitted data
  $name = $_GET['name'];
  $email = $_GET['email'];

  // Connecting with database
  $conn = mysqli_connect("localhost", "root", "", "health_report_db");

  // Checking if connection was successful
  if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
  }

  // Retrievng user data from database
  $sql = "SELECT age, weight, health_report_path FROM health_report WHERE email = '$email'";
  $result = mysqli_query($conn, $sql);

  $response = array();

  if (mysqli_num_rows($result) > 0) {
    $userData = array();
    $userData['Name'] = $name;
    $userData['Email'] = $email;
    while ($row = mysqli_fetch_assoc($result)) {
      $userData['Age'] = $row['age'];
      $userData['Weight'] = $row['weight'];
      $userData['PDF Name'] = basename($row['health_report_path']);
      $userData['Download Path'] = $row['health_report_path'];
    }

    $response['success'] = true;
    $response['userData'] = $userData;
  } else {
    $response['success'] = false;
    $response['message'] = 'No user data found.';
  }

  mysqli_close($conn);

  // Sending response as JSON
  header('Content-Type: application/json');
  echo json_encode($response);
}
?>
