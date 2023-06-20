// Get the current date
const currentDate = new Date();

// Select all the day elements in the calendar
const days = document.querySelectorAll('.day');

// Check if a day has been visited
function hasVisited(dayElement, date) {
  // In this example, we assume that the visited dates are stored in an array called "visitedDates"
  const visitedDates = ['2023-05-30', '2023-05-31', '2023-06-01']; // Sample visited dates

  const dateString = date.toISOString().split('T')[0]; // Get the date string in YYYY-MM-DD format

  return visitedDates.includes(dateString);
}

// Loop through each day element
days.forEach((dayElement) => {
  const day = parseInt(dayElement.textContent);

  // Set the date to the current year and month, and the day from the loop
  const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);

  // Check if the day has been visited
  if (hasVisited(dayElement, date)) {
    dayElement.classList.add('streak');
  }
});
