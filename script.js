// Getting form element
const form = document.getElementById('healthReportForm');

// Adding an event listener for form submission
form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent the default form submission behavior

  // Fetching form data
  const name = document.getElementById('name').value;
  const age = document.getElementById('age').value;
  const weight = document.getElementById('weight').value;
  const email = document.getElementById('email').value;
  const healthReportFile = document.getElementById('healthReport').files[0];

  // Check if the uploaded file is a PDF
  if (healthReportFile.type !== 'application/pdf') {
    const errorMessage = document.createElement('p');
    errorMessage.textContent = 'Error: Only PDF files are allowed.';
    form.appendChild(errorMessage);
    return; // Stop further execution
  }

  const formData = new FormData();

  // Appending form data to FormData object
  formData.append('name', name);
  formData.append('age', age);
  formData.append('weight', weight);
  formData.append('email', email);
  formData.append('healthReport', healthReportFile);

  // Sending form data to server using AJAX
  const xhr = new XMLHttpRequest();
  xhr.open('POST', 'insert.php', true);
  xhr.onload = function () {
    if (xhr.status === 200) {
      // Request was successful
      console.log(xhr.responseText);
      // Displaying a success message on the webpage
      const successMessage = document.createElement('p');
      successMessage.textContent = 'Form submitted successfully!';
      form.appendChild(successMessage);
      // Resetting the form after successful submission
      form.reset();
    } else {
      // Request failed
      console.error('Error:', xhr.status);
    }
  };
  xhr.send(formData);
});
