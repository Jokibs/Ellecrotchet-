const toggleButton = document.getElementById('toggle-button');
const toggleButton2 = document.getElementById('toggle-button2');
const toggleElements = document.querySelectorAll('.toggle-element');

// Event listener for the first toggle button
toggleButton.addEventListener('click', function() {
  toggleElements.forEach(element => {
    element.classList.toggle('hidden');
    
  });
});

// Event listener for the second toggle button
toggleButton2.addEventListener('click', function() {
  toggleElements.forEach(element => {
    element.classList.toggle('hidden');
  });
});
// Get the button element
    var button = document.getElementById('redirect-btn');

    // Add a click event listener to the button
    button.addEventListener('click', function() {
      // Redirect to index.html
      window.location.href = 'index.html';
    });
    
// Store the text in a JavaScript variable
    var myText = "  example:000 0000 000";

    // Get the element to display the text
    var displayElement = document.getElementById('displayText');

    // Set the text in the display element
    displayElement.textContent = myText;
document.getElementById("thalia-btn").addEventListener("click", function() {
      var message = "Hello, I wanted to connect with you.";
      var encodedMessage = encodeURIComponent(message);
      var phoneNumber = "+254114511439"; // Replace with the desired phone number

      var url = "https://api.whatsapp.com/send?phone=" + phoneNumber + "&text=" + encodedMessage;

      window.open(url);
    });

