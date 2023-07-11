document.getElementById('userDataForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;

  const xhr = new XMLHttpRequest();
  xhr.open('GET', `fetch_report.php?name=${name}&email=${email}`, true);
  xhr.onload = function() {
    if (xhr.status === 200) {
      const userDataDiv = document.getElementById('userData');
      const userDataTable = userDataDiv.querySelector('table');

      // Clear existing table rows except the header row
      const tableRows = userDataTable.querySelectorAll('tr');
      for (let i = tableRows.length - 1; i > 0; i--) {
        userDataTable.removeChild(tableRows[i]);
      }

      const response = JSON.parse(xhr.responseText);
      if (response.success) {
        const userData = response.userData;
        const keys = Object.keys(userData);

        keys.forEach(function(key) {
          const row = userDataTable.insertRow(-1);
          const contentTypeCell = row.insertCell(0);
          const userDataCell = row.insertCell(1);
          contentTypeCell.textContent = key;
          userDataCell.textContent = userData[key];
        });

        userDataDiv.style.display = 'block';
        document.getElementById('submitMessage').textContent = '';
      } else {
        
        userDataDiv.style.display = 'none';
        console.error(response.message);
      }
    } else {
        const noDataMessage = document.createElement('p');
        noDataMessage.textContent = 'No data found!';
        form.appendChild(noDataMessageMessage);
        console.error('Request failed with status:', xhr.status);
    }
  };
  xhr.send();
});
