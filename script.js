// Define an array of month names
const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  
  // Get the current date
  const currentDate = new Date();
//   console.log(currentDate);
  
  // Set initial values for the calendar
  let selectedDate = currentDate;
//   console.log(selectedDate);
  function getDayOfMonth(date) {
    return date.getDate();
  }
const aaj = getDayOfMonth(new Date());
console.log(aaj);
  let currentMonth = currentDate.getMonth();
  console.log(currentMonth);

  let currentYear = currentDate.getFullYear();
  console.log(currentYear);
  
  // Select elements from the DOM
  const prevMonthBtn = document.getElementById('prev-month');
  const nextMonthBtn = document.getElementById('next-month');
  const currentMonthYear = document.getElementById('current-month-year');
  const daysContainer = document.querySelector('.days');
  
  // Render the calendar
  function renderCalendar() {
    // Clear the calendar
    daysContainer.innerHTML = '';
  
    // Set the month and year in the header
    currentMonthYear.textContent = `${monthNames[currentMonth]} ${currentYear}`;
  
    // Get the number of days in the current month
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  
    // Render each day in the calendar
    for (let day = 1; day <= daysInMonth; day++) {
      const dayElement = document.createElement('div');
      dayElement.textContent = day;
  
      // Add a streak class to the past days
      if (currentDate == new Date(currentYear, currentMonth, day)) {
        dayElement.classList.add('streak');
      }
  
      daysContainer.appendChild(dayElement);
    }
  }
  
  // Event listeners for changing the month
  prevMonthBtn.addEventListener('click', () => {
    if (currentMonth === 0) {
      currentMonth = 11;
      currentYear--;
    } else {
      currentMonth--;
    }
    renderCalendar();
  });
  
  nextMonthBtn.addEventListener('click', () => {
    if (currentMonth === 11) {
      currentMonth = 0;
      currentYear++;
    } else {
      currentMonth++;
    }
    renderCalendar();
  });
  
  // Initial rendering of the calendar
  renderCalendar();
  