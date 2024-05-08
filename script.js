function sendFormData() {
  // Get form data
  const formData = new FormData(document.getElementById('loginform'));

  // Send data to PHP script using AJAX
  fetch('send_email.php', {
    method: 'POST',
    body: formData
  })
  .then(response => response.text())
  .then(data => {
    console.log(data);
    // You can add code here to display a success message to the user
  })
  .catch(error => {
    console.error(error);
    // You can add code here to display an error message to the user
  });

  return false; // Prevent default form submission
}