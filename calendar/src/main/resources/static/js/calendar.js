//code learned from: https://www.geeksforgeeks.org/how-to-create-a-dynamic-calendar-in-html-css-javascript/

let Todo = [];

class Todos {
    constructor(id, date, month, year, title,reminder) {
        this.id = id;
        this.date = date;
        this.month = month;
        this.year = year;
        this.title = title;
        this.reminder = reminder;
    }
}

Todo.push(new Todos(1, 21, 5, 2024, "CMPT 276 Midterm", "at 12:30"))

//initialize date-related variables
var today = new Date();
console.log(today);
var currentMonth = today.getMonth();
var currentYear = today.getFullYear();

let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "October",
    "November",
    "December"
];

function daysInMonth(iMonth, iYear) {
    return 32 - new Date(iYear, iMonth, 32).getDate();
}

function getEventsOnDate(date, month, year){
    return Todo.filter(function (event){
        let eventDate =  new Date(event.date);
        return(eventDate.getDate()=== date &&
        eventDate.getMonth() === month &&
        eventDate.getFullYear() === year);
    });
}

function hasEventOnDate(date,month,year){
    return getEventsOnDate(date,month,year).length > 0;
}

function showCalendar(month, year){
    let firstDay = new Date(year, month, 1).getDay();
    let calendar_body = document.getElementById("Calendar-body");
    let calendar_header = document.getElementById("month");
    calendar_header.textContent = months[month];

    let date = 1;
    //create the table for calendar
    for(let i=0; i<6;i++){
        let row = document.createElement("tr");
        for(let j = 0; j<7; j++){
            if(i === 0 && j < firstDay){
                cell = document.createElement("td");
                cellText = document.createTextNode("");
                cell.appendChild(cellText);
                row.appendChild(cell);
            }
            else if (date > daysInMonth(month,year)){
                break;
            }
            else{
                cell = document.createElement(("td"));
                cell.setAttribute("data-date", date);
                cell.setAttribute("data-month", month+1);
                cell.setAttribute("data-year", year);
                cell.setAttribute("data-month_name", months[month]);
                cell.className="date-picker";
                cell.innerHTML = date;

                row.appendChild(cell);
                date++;

                if(hasEventOnDate(date, month, year)){
                    let tooltip = document.createElement("div");
                    tooltip.className = "event-tooltip";
                    let eventsOnDate = getEventsOnDate(date,month,year);
                    for(let i= 0; i<eventsOnDate.length;i++){
                        let 
                    }
                }

            }

        }
        calendar_body.appendChild(row);
    }
}

showCalendar(currentMonth, currentYear);