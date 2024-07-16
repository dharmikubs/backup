document.addEventListener("DOMContentLoaded", function () {
  const date = new Date();
  let month = date.getMonth();
  let year = date.getFullYear();
  const today = date.getDate();
  const todayMonth = date.getMonth();
  const todayYear = date.getFullYear();

  const calendarBody = document.getElementById("calendarBody");
  const currentMonth = document.getElementById("currentMonth");
  const prevMonth = document.getElementById("prevMonth");
  const nextMonth = document.getElementById("nextMonth");

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  function renderCalendar(month, year) {
    const firstDay = (new Date(year, month, 1).getDay() + 6) % 7; // Adjust to make Monday the first day of the week
    const daysInMonth = 32 - new Date(year, month, 32).getDate();
    const prevLastDay = new Date(year, month, 0).getDate();
    const nextDays = (7 - ((firstDay + daysInMonth) % 7)) % 7;

    calendarBody.innerHTML = "";
    currentMonth.innerHTML = `${monthNames[month]} ${year}`;

    let date = 1;
    let prevMonthDate = prevLastDay - firstDay + 1;
    let nextMonthDate = 1;

    for (let i = 0; i < 6; i++) {
      // Always show 6 rows
      const row = document.createElement("tr");

      for (let j = 0; j < 7; j++) {
        const cell = document.createElement("td");
        const span = document.createElement("span");
        span.classList.add("date");

        if (i === 0 && j < firstDay) {
          span.innerHTML = prevMonthDate;
          span.classList.add("outside_month");
          prevMonthDate++;
        } else if (date > daysInMonth) {
          span.innerHTML = nextMonthDate;
          span.classList.add("outside_month");
          nextMonthDate++;
        } else {
          span.innerHTML = date;
          if (date === today && month === todayMonth && year === todayYear) {
            span.classList.add("today");
          }
          if (j === 6) {
            // Disable Sundays
            span.classList.add("disabled");
          } else {
            cell.onclick = () => {
              const selected = document.querySelector(".selected");
              if (selected) {
                selected.classList.remove("selected");
              }
              const todaySpan = calendarBody.querySelector(".today");
              if (todaySpan) {
                todaySpan.classList.remove("today");
              }
              span.classList.add("selected");
              const selectedDate = new Date(year, month, span.innerHTML);
              handleDateSelection(selectedDate);
            };
          }
          date++;
        }
        cell.appendChild(span);
        row.appendChild(cell);
      }

      calendarBody.appendChild(row);
    }
  }

  prevMonth.onclick = () => {
    month--;
    if (month < 0) {
      month = 11;
      year--;
    }
    renderCalendar(month, year);
  };

  nextMonth.onclick = () => {
    month++;
    if (month > 11) {
      month = 0;
      year++;
    }
    renderCalendar(month, year);
  };

  renderCalendar(month, year);

  function handleDateSelection(selectedDate) {
    let selected_date = document.getElementById("selected_date");
    const formattedDate = `${dayNames[selectedDate.getDay()]} ${monthNames[
      selectedDate.getMonth()
    ].slice(0, 3)} ${selectedDate.getDate()}`;
    // console.log(formattedDate);
    selected_date.innerHTML = formattedDate;
    // You can perform any other actions here with the selected date
  }

  function getFormattedDate(date) {
    return `${dayNames[date.getDay()]} ${monthNames[date.getMonth()].slice(
      0,
      3
    )} ${date.getDate()}`;
  }

  const initialSelectedDate = calendarBody.querySelector(".selected");
  if (!initialSelectedDate) {
    const formattedToday = getFormattedDate(new Date());
    selected_date.innerHTML = formattedToday;
    // Perform any other actions with today's date if no date is selected
  }
});
