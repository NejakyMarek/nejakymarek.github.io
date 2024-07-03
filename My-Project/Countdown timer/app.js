const months = [
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
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline')
const items = document.querySelectorAll('.deadline-format h4')

// Tu nastavim cas vzdy o 10 dni viac aby to stale odpocitavalo
let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();

const futureDate = new Date(tempYear, tempMonth, tempDay + 11, 11, 30,0)

// let futureDate = new Date(2024,5,16,11,30,0);
// console.log(futureDate);
const year = futureDate.getFullYear()
const hours = futureDate.getHours()
const mins = futureDate.getMinutes()
let month = futureDate.getMonth()
month = months[month]
const date = futureDate.getDate()
const weekday = weekdays[futureDate.getDay()]


giveaway.textContent = `do roboty ides ${weekday}, ${date} ${month} ${year}, ${hours}:${mins}am`

// future time in miliseconds
const futureTime = futureDate.getTime()

function getRemainingTime (){
  const today = new Date().getTime();
  const t = futureTime-today

  const oneDay = 24*60*60*1000
  const oneHour = 60*60*1000
  const oneMinute = 60*1000
  // calculate
  let days = t/oneDay
  days = Math.floor(days)
  let hours = Math.floor((t % oneDay) / oneHour)
  let minutes = Math.floor((t% oneHour) / oneMinute)
  let seconds = Math.floor((t% oneMinute) / 1000)

// set value array;
const values = [days, hours, minutes, seconds]

function format(item) {
  if(item < 10){
    return item = `0${item}`
  }
  return item
}

items.forEach(function(item, index){
  item.innerHTML = format(values[index])
})

if (t<0) {
  clearInterval(countdown)
  deadline.innerHTML= `<h4 class="expired">sorry, musis ist do roboty</h4>`
}

}

// odpocet
let countdown = setInterval(getRemainingTime, 1000)

getRemainingTime();