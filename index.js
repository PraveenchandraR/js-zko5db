// Import stylesheets
import './style.css';

// Write Javascript code!
function numberPrinter() {
  var output = document.getElementById("output");

  for (var i = 1; i <= 100; i++) {
    var listItem = document.createElement("li");

    if (i % 3 === 0 && i % 5 === 0) {
      listItem.textContent = "amazon";
    } else if (i % 3 === 0) {
      listItem.textContent = "google";
    } else if (i % 5 === 0) {
      listItem.textContent = "facebook";
    } else {
      listItem.textContent = i;
    }

    output.appendChild(listItem);
  }
}

// Call the function to generate the output
numberPrinter();