function togglehomeicon(){if(home[0].innerHTML === '<i class="material-icons">menu</i>'){home[0].innerHTML = '<i class="material-icons">menu_open</i>';}else{home[0].innerHTML = '<i class="material-icons">menu</i>';}if(home[1].innerHTML === '<i class="material-icons">menu</i>'){home[1].innerHTML = '<i class="material-icons">menu_open</i>';}else {home[1].innerHTML = '<i class="material-icons">menu</i>';}}
  
const toggleButton = document.getElementById('toggle-button');
const toggleButton2 = document.getElementById('toggle-button2');
const toggleElements = document.querySelectorAll('.toggle-element');
var home=document.getElementsByClassName("hamburger");
// Event listener for the first toggle button
toggleButton.addEventListener('click', function() {
  toggleElements.forEach(element => {
    element.classList.toggle('hidden');
    
  });
   
  togglehomeicon();
});

// Event listener for the second toggle button
toggleButton2.addEventListener('click', function() {
  toggleElements.forEach(element => {
    element.classList.toggle('hidden');
  });
 togglehomeicon();

});
// Get the button element
    var button = document.getElementById('redirect-btn');
if(button){
    // Add a click event listener to the button
    button.addEventListener('click', function() {
      // Redirect to index.html
      window.location.href = 'https://www.crochet.co.ke/';
    });
};
// Store the text in a JavaScript variable
    var myText = ":+254 110448686";


    // Get the element to display the text
    var displayElement = document.getElementById('displayText');
if (displayElement) {
   displayElement.textContent = myText;
}
    // Set the text in the display element
   
    
function createWhatsAppButtonListener(buttonId, message) {
  var button = document.getElementById(buttonId);
  if (button) {
    button.addEventListener("click", function() {
      var encodedMessage = encodeURIComponent(message);
      var phoneNumber = "+254114511439";

      var url = "https://api.whatsapp.com/send?phone=" + phoneNumber + "&text=" + encodedMessage;

      window.open(url);
    });
  }
}

// Create WhatsApp button listeners
createWhatsAppButtonListener("thalia-btn", "Hello, I want to buy the Thalia top crochet");
createWhatsAppButtonListener("pink-btn", "Hello, I want to buy the Pink crochet top");
createWhatsAppButtonListener("black-crochet-btn", "Hello, I want to buy the Black crochet top");
createWhatsAppButtonListener("blue-Ropes-top-crochet-btn", "Hello, I want to buy the Blue Ropes top crochet");
createWhatsAppButtonListener("halter-top-crochet-btn", "Hello, I want to buy the Halter top crochet");
createWhatsAppButtonListener("Pink-Divide-crochet-set-btn", "Hello, I want to buy the Pink Divide crochet set");
createWhatsAppButtonListener("Red-crochet-top-btn", "Hello, I want to buy the Red crochet top");
createWhatsAppButtonListener("Deep-black-crochet-top-btn", "Hello, I want to buy the Deep black crochet top");
createWhatsAppButtonListener("purple-divide-halter-top-btn", "Hello, I want to buy the Purple Divide halter top");
createWhatsAppButtonListener("white-crochet-top-btn", "Hello, I want to buy the White crochet top");
createWhatsAppButtonListener("orange-crochet-skirt-btn", "Hello, I want to buy the Orange crochet skirt");
createWhatsAppButtonListener("fleece-mini-bag-crochet-btn", "Hello, I want to buy the Fleece mini bag crochet");
createWhatsAppButtonListener("pink-divide-mesh-skirt-btn", "Hello, I want to buy the Pink Divide mesh skirt");
createWhatsAppButtonListener("black-crochet-btn", "Hello, I want to buy the Black crochet top");
createWhatsAppButtonListener("blue-white-tote-btn", "Hello, I want to buy the Blue and White tote");
createWhatsAppButtonListener("pink-mermaid-btn", "Hello, I want to buy the Pink mermaid");
createWhatsAppButtonListener("orange-mermaid-top-btn", "Hello, I want to buy the Orange mermaid top");
createWhatsAppButtonListener("purple-blue-mermaid-top-btn", "Hello, I want to buy the Purple and Blue mermaid top");
createWhatsAppButtonListener("redblue-cross-top-btn", "Hello, I want to buy the Red and Blue cross top");
createWhatsAppButtonListener("checkered-bralette-top-crochet-btn", "Hello, I want to buy the Checkered Bralette top crochet");
createWhatsAppButtonListener("blue-bridge-crochet-top-btn", "Hello, I want to buy the Blue Bridge crochet top");
createWhatsAppButtonListener("fuzzy-purple-crochet-top-btn", "Hello, I want to buy the Fuzzy Purple crochet top");
createWhatsAppButtonListener("checkered-mini-bag-btn", "Hello, I want to buy the Checkered mini bag");
createWhatsAppButtonListener("grey-crochet-top-btn", "Hello, I want to buy the Grey crochet top");
createWhatsAppButtonListener("green-brown-btn", "Hello, I want to buy the Green-Brown skirt");
createWhatsAppButtonListener("blue-bikini-btn", "Hello, I want to buy the blue bikini");
createWhatsAppButtonListener("pw-bikini-btn", "Hello, I want to buy the pink white bikini ");

createWhatsAppButtonListener( "red-bikini-btn" , "Hello, I want to buy the red bikini");

createWhatsAppButtonListener("pink-divide×mesh-skirt-btn"  , "Hello, I want to buy the pink-divide×mesh-skirt" );
createWhatsAppButtonListener( "peek-a-boob×mesh skirt-btn" , "Hello, I want to buy the peek a boob×mesh skirt");
createWhatsAppButtonListener( "maren-btn" , "Hello, I want to buy the maren top ");
createWhatsAppButtonListener("butterfly-btn"  , "Hello, I want to buy the  butterfly top");
createWhatsAppButtonListener( "peek-btn" , "Hello, I want to buy the peek a boob top ");
createWhatsAppButtonListener( "orange-maren-btn" , "Hello, I want to buy the orange maren top ");
