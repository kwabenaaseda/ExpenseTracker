// Function to add income information to the display section
function addIncome() {
    // Get form inputs
    var incomeName = document.querySelector('.form input[type="text"]').value.trim();
    var amount = document.querySelector('.form input[type="number"]').value.trim();
  
    // Validate inputs
    if (incomeName === '' || amount === '') {
      alert('Please enter both Income Name and Amount.');
      return;
    }

    //Delete input
  
    // Generate current date and time
    var currentDate = new Date();
    var dateTime = currentDate.toLocaleString(); // Adjust format as needed
  
    // Create new row for display
    var displayTable = document.querySelector('.display table tbody');
    var newRow = document.createElement('tr');
    newRow.innerHTML = `
      <td>${incomeName}</td>
      <td>${amount}</td>
      <td>${dateTime}</td>
    `;
  
    // Append new row to display table
    displayTable.appendChild(newRow);
  
    // Scroll to bottom of display section
    var displaySection = document.querySelector('.display');
    displaySection.scrollTop = displaySection.scrollHeight;

    //to clear
    if(newRow.innerHTML = `
        <td>${incomeName}</td>
        <td>${amount}</td>
        <td>${dateTime}</td>
      `){
        incomeName.innerHTML === " " || amount.innerHTML ===" ";
        return;
      }
  }
  
  // Add event listener to the Add button
  var addButton = document.querySelector('.add');
  addButton.addEventListener('click', addIncome);

  