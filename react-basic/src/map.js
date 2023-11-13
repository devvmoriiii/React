const weekday = ["Mon.", "Tue.", "Wed.", "Thu.", "Fri."];
const newWeekday = weekday.map((item, index) => {return (`Today is ${item} ${index + 1}st day.`)});
console.log(newWeekday);
