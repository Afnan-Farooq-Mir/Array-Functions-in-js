/*1--Date Formatting:
Create a function that takes a JavaScript Date object as input and returns a formatted date string in the format "YYYY-MM-DD HH:mm:ss".*/

// function createDate(date){
//     const year = date.getFullYear();
//     const month = String(date.getMonth()).padStart(2,'0');
//     const day =  String( date.getDate()).padStart(2,'0');
//     const hours = String(date.getHours()%12 || 12).padStart(2,'0'); //Here i am converting 24 hours into 12Hours
//     const minutes = String(date.getMinutes()).padStart(2,'0');
//     const seconds = String(date.getSeconds()).padStart(2,'0');
//     const amORpm = hours >=12? 'PM' : 'AM';
//     return `${year}-${month}-${day} ${hours}:${minutes}:${seconds} ${amORpm}`
    
// }
// console.log(createDate(new Date()))


/*2--Age Calculator:
Build a function that calculates the age of a person based on their date of birth. The function should take the birthdate as input and return the age in years.*/

// function ageCal(bday){
//     // console.log(bday)
//     const yearOfborn = bday.getFullYear()
//     // console.log(yearOfborn)
//      currentDate = new Date().getFullYear()


//      age = currentDate - yearOfborn;
//      return `You Are ${age} year's Old`
    


// }

// console.log(ageCal(new Date("2002")))


/*3--Days Until Next Birthday:
Write a function that takes a birthdate as input and calculates the number of days remaining until the next birthday.*/


// function mynextBday(birthdate){

//     const today = new Date();
//   const currentYear = today.getFullYear();
//   const nextBirthday = new Date(currentYear, birthdate.getMonth(), birthdate.getDate());

//   if (nextBirthday < today) {
//     nextBirthday.setFullYear(currentYear + 1);
//   }

//   const millisecondsInDay = 1000 * 60 * 60 * 24; 
//   const daysUntilNextBirthday = Math.round((nextBirthday - today) / millisecondsInDay);

//   return daysUntilNextBirthday;
// }
// console.log(mynextBday(new Date('2001/12/10')))


/*4--Countdown Timer:
// Create a countdown timer that takes a future date as input and displays the remaining days, hours, minutes, and seconds until that date.*/


// function newfutureDate(date){
  
//   const today = new Date().getTime();
//   const targetDate = new Date(date).getTime();
//   const timeRemaining = targetDate - today;
 
//   if(timeRemaining > 0){

//     const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
//     const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//     const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
//     const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
//     return `${days}d ${hours}h ${minutes}m ${seconds}s;`
//   } 
//   else{
//     return `Today`
//   }
// }
// console.log(newfutureDate(new Date('2024/01/01')))



/*5--Leap Year Checker:
Build a function that checks if a given year is a leap year. The function should return true if it is, and false otherwise.*/


// function leapYear(year){

//  const lastDayOfYear = new Date(year,11,31);
//  const daysInYear = Math.floor((lastDayOfYear - new Date(year, 0, 0)) / 86400000);
//  console.log(daysInYear)
//   if(daysInYear == 366){
//     return ` Leap Year : ${year} has ${daysInYear} days`
//   }else{
//     return `Not Leap Year : ${year} has ${daysInYear} days`
//   }

// }
// console.log(leapYear('2024'))

/*Days Between Two Dates:
Write a function that takes two dates as input and calculates the number of days between them*/

// function betweenDays(x,y){

//   const day1 = x.getTime();
//   const day2 = y.getTime();
  

// if(x<y){

//   const bt = day2 - day1
//    const days = Math.floor( bt / (1000 * 60 * 60 * 24));
//   return `The Number Of Days Betwen two given dates are ${days}` 
// }
// else if (x>y){
//   const bt = day1 - day2
//   const days = Math.floor( bt / (1000 * 60 * 60 * 24));
//  return `The Number Of Days Betwen two given dates are ${days}`
 
// }
// else{
  
//   return `The Number Of Days Betwen two given dates are ZERO`
// }

// }
// console.log(betweenDays(new Date('2023/01/01'),new Date('2024/01/01')))



/*Day of the Week Finder:
Implement a function that takes a date as input and returns the corresponding day of the week (e.g., Monday, Tuesday).*/

// function dayFinder(date){
// //You could use the Date. getDay() method, which returns 0 for sunday, up to 6 for saturday. 
//   const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
//   console.log(days[date.getDay()])

//   // console.log(date)

// }

// dayFinder(new Date('2024/01/04'))


/*Working Days Calculator:
Create a function that calculates the number of working days (excluding weekends) between two given dates.*/

// function workingDays(x,y){
//   if(x>y){
//     return 0;
//   }
//   const startDay = x.getTime();
//   const endDay = y.getTime();
//    const daysbetween = endDay-startDay;
//   const numberOfDays= Math.floor( daysbetween / (1000 * 60 * 60 * 24));
  

//   let weeks = Math.floor(numberOfDays/ 7);
//   let subweek = numberOfDays - (weeks * 2);


// return subweek


// }
// console.log(workingDays(new Date('2024/01/01'), new Date('2024/01/02')))
// function getWorkingDays(startDate, endDate) {
//   let workingDays = 0;
//   let currentDate = new Date(startDate);

//   while (currentDate <= endDate) {
//     const dayOfWeek = currentDate.getDay();
//     if (dayOfWeek !== 0 && dayOfWeek !== 6) {
//       workingDays++;
//     }
//     currentDate.setDate(currentDate.getDate() + 1);
//   }

//   return workingDays;
// }

// // Example usage
// const startDate = new Date('2024-01-01');
// const endDate = new Date('2024-01-02');
// console.log(getWorkingDays(startDate, endDate)); // Output: 10




/*Event Scheduler:
Develop a simple event scheduler that allows users to input events with dates and times. The program should then display a list of upcoming events in chronological order.*/
// // Define an array to store the events
// const events = [];
// // Function to add a new event
// function addEvent(eventName, eventDate, eventTime) {
//   events.push({ name: eventName, date: new Date(eventDate + 'T' + eventTime) });
// }
// // Function to display upcoming events in chronological order
// function displayUpcomingEvents() {
//   // Sort the events by date
//   events.sort((a, b) => a.date - b.date);

//   // Display the upcoming events
//   console.log('Upcoming Events:');
//   for (let event of events) {
//     const formattedDate = event.date.toLocaleDateString();
//     const formattedTime = event.date.toLocaleTimeString();
//     console.log(`${event.name} - ${formattedDate} at ${formattedTime}`);
//   }
// }
// // Example usage
// addEvent('Meeting', '2022-01-15', '09:00');
// addEvent('Lunch', '2022-01-20', '01:30');
// addEvent('Presentation', '2022-01-10', '15:00');
// displayUpcomingEvents();




const eventList = [];
function eventInput(eventName,eventDates,eventTime){
  eventList.push({Name: eventName, date: new Date(eventDates + 'T' + eventTime)})
};

function eventSort(){
  eventList.sort((a,b)=> a.date - b.date )
  
  for(let event of eventList){
    const formatedDates =event.date.toLocaleDateString();
    const formatedTime =event.date.toLocaleTimeString();
    
    console.log(`${event.Name} - ${formatedDates} at ${formatedTime}`)
  }
  
}
eventInput('Birthday','2024-01-04','12:00');
eventSort()
