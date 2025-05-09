// script.js

// 1. Change Text Content Dynamically
const welcomeHeader = document.getElementById('welcome-header');
welcomeHeader.textContent = 'Welcome to My Dynamic Page!';

// 2. Modify CSS Styles via JavaScript
const homeLink = document.getElementById('home-link');
homeLink.style.backgroundColor = '#4CAF50'; // Change background color
homeLink.style.padding = '15px';          // Add padding
homeLink.style.borderRadius = '5px';    // Add rounded corners

const paragraph = document.getElementById('first-paragraph');
paragraph.style.color = '#555';
paragraph.style.fontSize = '18px';
paragraph.style.fontFamily = 'Arial, sans-serif';

// 3. Add or Remove an Element when a Button is Clicked
const newElementContainer = document.getElementById('new-element-container');
const addElementButton = document.getElementById('add-element-button');
const removeElementButton = document.getElementById('remove-element-button');
let elementCount = 0; // Keep track of added elements

addElementButton.addEventListener('click', () => {
    const newElement = document.createElement('p');
    newElement.textContent = `New Element ${++elementCount}`;
    newElement.id = `element-${elementCount}`; // Set a unique ID
    newElement.style.color = 'green';
    newElementContainer.appendChild(newElement);
});

removeElementButton.addEventListener('click', () => {
    if (elementCount > 0) {
        const elementToRemove = document.getElementById(`element-${elementCount}`);
        elementToRemove.remove();
        elementCount--;
    } else {
        alert('No more elements to remove!');
    }
});

// 4. Change text on button click
const changeTextButton = document.getElementById('change-text-button');
changeTextButton.addEventListener('click', () => {
  const paragraph = document.getElementById('first-paragraph');
  if (paragraph.textContent === "This is the initial content of the paragraph."){
      paragraph.textContent = "The text has been changed!";
  }
  else{
    paragraph.textContent = "This is the initial content of the paragraph.";
  }

});
