// Get references to the DOM elements
var popupbox = document.querySelector(".popup-box");
var addbutton = document.getElementById("add-popup-button");
var popupoverlay = document.querySelector(".popup-overlay");
var cancelbutton = document.getElementById("popup-cancel");
var container = document.querySelector(".container");
var addbook = document.getElementById("add-book");
var bookname = document.getElementById("book-name-input");
var authorname = document.getElementById("book-author-input");
var shortnote = document.getElementById("book-description"); // Fixed ID

// Show popup box and overlay when 'add-popup-button' is clicked
addbutton.addEventListener("click", function() {
    popupoverlay.style.display = "block";
    popupbox.style.display = "block";
});

// Hide popup box and overlay when 'popup-cancel' button is clicked
cancelbutton.addEventListener("click", function() {
    popupoverlay.style.display = "none";
    popupbox.style.display = "none";
});

// Add book to container and hide popup when 'add-book' button is clicked
addbook.addEventListener("click", function() {
    // Create a new book container element
    var div = document.createElement("div");
    div.setAttribute("class", "book-container");

    // Set the inner HTML of the new book container
    div.innerHTML = `
        <h3>${bookname.value}</h3>
        <h5>${authorname.value}</h5><hr color="black">
        <p>${shortnote.value}</p>
        <button class="delete-button">delete</button>
    `;

    // Append the new book container to the container element
    container.append(div);

    // Hide popup box and overlay
    popupoverlay.style.display = "none";
    popupbox.style.display = "none";
    div.querySelector(".delete-button").addEventListener("click",deletebook);
});
function deletebook(event){
    event.target.parentElement.remove()
}